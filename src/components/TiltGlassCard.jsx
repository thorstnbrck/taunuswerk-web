import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const SPRING_CONFIG = { stiffness: 260, damping: 24 };

export default function TiltGlassCard({
  children,
  index = 0,
  maxTilt = 6,
  shimmerBorder = false,
  enableTilt = true,
  className = '',
  style = {},
  ...props
}) {
  const cardRef = useRef(null);
  const boundsRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Normalized cursor coordinates (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glareOpacity = useMotionValue(0);

  // Physical spring inertia (Stiffness: 260, Damping: 24)
  const springX = useSpring(mouseX, SPRING_CONFIG);
  const springY = useSpring(mouseY, SPRING_CONFIG);
  const springGlare = useSpring(glareOpacity, SPRING_CONFIG);

  const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const glareTranslateX = useTransform(springX, [-0.5, 0.5], ['-25%', '25%']);
  const glareTranslateY = useTransform(springY, [-0.5, 0.5], ['-25%', '25%']);

  const handlePointerEnter = (e) => {
    if (!enableTilt || e.pointerType === 'touch') return;
    if (cardRef.current) {
      boundsRef.current = cardRef.current.getBoundingClientRect();
      glareOpacity.set(1);
      setIsHovered(true);
    }
  };

  const handlePointerMove = (e) => {
    if (!enableTilt || e.pointerType === 'touch' || !boundsRef.current) return;
    const rect = boundsRef.current;
    const nx = (e.clientX - rect.left) / Math.max(rect.width, 1) - 0.5;
    const ny = (e.clientY - rect.top) / Math.max(rect.height, 1) - 0.5;
    mouseX.set(Math.max(-0.5, Math.min(0.5, nx)));
    mouseY.set(Math.max(-0.5, Math.min(0.5, ny)));
  };

  const handlePointerLeave = () => {
    boundsRef.current = null;
    mouseX.set(0);
    mouseY.set(0);
    glareOpacity.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`glass-panel ${shimmerBorder ? 'border-shimmer-card' : ''} ${className}`.trim()}
      style={{
        opacity: 1, // Always 100% visible - never disappears on scroll
        transformPerspective: 1000,
        rotateX: enableTilt && isHovered ? rotateX : 0,
        rotateY: enableTilt && isHovered ? rotateY : 0,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        ...style,
      }}
      {...props}
    >
      {/* Specular glare layer */}
      {enableTilt && (
        <motion.div
          aria-hidden="true"
          className="tilt-specular-glare"
          style={{
            opacity: springGlare,
            x: glareTranslateX,
            y: glareTranslateY,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
