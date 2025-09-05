import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const animationIdRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const points = pointsRef.current;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Check if it's a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse position tracking
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Add new point
      points.push({
        x: mouseX,
        y: mouseY,
        life: 1.0,
        size: Math.random() * 3 + 2
      });
      
      // Limit number of points
      if (points.length > 20) {
        points.shift();
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw points
      for (let i = points.length - 1; i >= 0; i--) {
        const point = points[i];
        
        // Update life
        point.life -= 0.02;
        
        // Remove dead points
        if (point.life <= 0) {
          points.splice(i, 1);
          continue;
        }
        
        // Get theme colors
        const isModernTheme = document.documentElement.getAttribute('data-theme') === 'modern';
        const color = isModernTheme 
          ? `rgba(59, 130, 246, ${point.life * 0.6})` 
          : `rgba(255, 0, 255, ${point.life * 0.6})`;
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size * point.life, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      
      animationIdRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-40 cursor-trail"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;
