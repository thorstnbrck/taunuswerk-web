import React, { useEffect, useRef } from 'react';

const VERTEX_SHADER = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

// Simplex 2D/3D Noise in GLSL for organic pastel aurora waves
const FRAGMENT_SHADER = `
  precision mediump float;
  varying vec2 v_uv;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 aspect = vec2(u_resolution.x / max(u_resolution.y, 1.0), 1.0);
    vec2 uv = v_uv * aspect;

    // Subtle parallax offset driven by damped mouse coordinates
    vec2 mouseOffset = (u_mouse - 0.5) * 0.18 * aspect;
    vec2 p = uv - mouseOffset;

    float t = u_time * 0.14;

    // Multi-layered flowing simplex noise for aurora ribbons
    float n1 = snoise(p * 1.15 + vec2(t * 0.7, -t * 0.5));
    float n2 = snoise(p * 2.1 - vec2(t * 0.4, t * 0.6) + n1 * 0.45);
    float n3 = snoise(p * 0.85 + vec2(-t * 0.3, t * 0.35) + n2 * 0.35);

    // Base Pastel Palette (Warm Chalk, Rosé, Soft Sky Blue, Peach, Lavender)
    vec3 colChalk    = vec3(0.973, 0.980, 0.988); // #F8FAFC
    vec3 colRose     = vec3(0.988, 0.885, 0.945); // Soft Rosé (#FCE7F3)
    vec3 colSky      = vec3(0.855, 0.945, 0.996); // Soft Ice Blue (#E0F2FE)
    vec3 colPeach    = vec3(0.996, 0.895, 0.820); // Soft Pastel Peach (#FED7AA)
    vec3 colLavender = vec3(0.922, 0.905, 0.996); // Soft Lavender (#EDE9FE)

    // Smooth blending weights
    float wRose = smoothstep(-0.5, 0.75, n1);
    float wSky  = smoothstep(-0.4, 0.8, n2);
    float wPeach = smoothstep(-0.2, 0.85, n3);

    // Radial cursor glow influence for subtle interactive refraction
    float mouseDist = length((v_uv - u_mouse) * aspect);
    float mouseGlow = exp(-mouseDist * 2.4) * 0.32;

    vec3 color = colChalk;
    color = mix(color, colRose, wRose * 0.65);
    color = mix(color, colSky, wSky * 0.60);
    color = mix(color, colPeach, wPeach * 0.52);
    color = mix(color, colLavender, (1.0 - wRose) * wSky * 0.48);

    // Subtle luminous aurora crest highlights
    vec3 auroraCrest = mix(vec3(0.984, 0.573, 0.235), vec3(0.957, 0.247, 0.369), wSky);
    float crestMask = smoothstep(0.45, 0.95, n1 * n2 + mouseGlow);
    color = mix(color, auroraCrest, crestMask * 0.11);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function AuroraCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'low-power',
    });

    if (!gl) return;

    const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);

    // Fullscreen quad
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const resLoc = gl.getUniformLocation(program, 'u_resolution');
    const mouseLoc = gl.getUniformLocation(program, 'u_mouse');

    // Inertial mouse state (damped parallax)
    const targetMouse = { x: 0.5, y: 0.5 };
    const currentMouse = { x: 0.5, y: 0.5 };

    const handlePointerMove = (e) => {
      targetMouse.x = e.clientX / Math.max(window.innerWidth, 1);
      targetMouse.y = 1.0 - e.clientY / Math.max(window.innerHeight, 1);
    };

    const handleResize = () => {
      // Render at capped resolution for locked 60 FPS on mobile & retina displays
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const width = Math.floor(window.innerWidth * dpr);
      const height = Math.floor(window.innerHeight * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQuery.matches;
    const handleMotionPref = (e) => {
      prefersReducedMotion = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionPref);

    let rafId;
    const startTime = performance.now();

    const render = (now) => {
      const elapsed = (now - startTime) * 0.001;

      // Lazy low-pass inertia for mouse parallax
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.035;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.035;

      gl.uniform1f(timeLoc, prefersReducedMotion ? 0.0 : elapsed);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform2f(mouseLoc, currentMouse.x, currentMouse.y);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    };

    rafId = requestAnimationFrame(render);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      mediaQuery.removeEventListener('change', handleMotionPref);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <div className="ambient-backdrop" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="aurora-webgl-canvas"
      />
    </div>
  );
}
