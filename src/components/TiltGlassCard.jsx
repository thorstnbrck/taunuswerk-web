import React, { useRef } from 'react';
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
      // Cache bounds once on enter to avoid layout thrashing during pointermove
      boundsRef.current = cardRef.current.getBoundingClientRect();
      glareOpacity.set(1);
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
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 24,
        delay: index * 0.05, // 50ms staggered fade-up delay per card
      }}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`glass-panel ${shimmerBorder ? 'border-shimmer-card' : ''} ${className}`.trim()}
      style={{
        ...style,
        transformPerspective: 1000,
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        willChange: 'transform, opacity',
      }}
      {...props}
    >
      {/* Dynamic specular glass glare layer (compositor-only transform & opacity) */}
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
