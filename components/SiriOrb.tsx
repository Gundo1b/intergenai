import React, { useRef, useEffect } from 'react';

export const SiriOrb: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match display size
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);

    let time = 0;
    let animId: number;

    const render = () => {
      time += 0.005; // Slowed down slightly for smoother ambient feel
      ctx.clearRect(0, 0, width, height);
      
      // Use 'lighter' composite mode to blend colors additively within the canvas
      ctx.globalCompositeOperation = 'lighter';

      const cx = width / 2;
      const cy = height / 2;
      // Base radius for the orb
      const baseRadius = Math.min(width, height) * 0.35;

      // Brand-aligned colors: Cyan, Purple, Blue
      const orbs = [
        { color: 'rgba(100, 225, 255, 0.4)', speed: 0.8, offset: 0 },   // Cyan
        { color: 'rgba(139, 92, 246, 0.4)', speed: 0.7, offset: 2 },    // Purple
        { color: 'rgba(59, 130, 246, 0.4)', speed: 0.6, offset: 4 },    // Blue
      ];

      orbs.forEach((orb, i) => {
        // Organic movement using sin/cos with different frequencies
        const dx = Math.cos(time * orb.speed + orb.offset) * (width * 0.15);
        const dy = Math.sin(time * orb.speed * 0.8 + orb.offset) * (height * 0.1);
        
        const x = cx + dx;
        const y = cy + dy;
        // Pulse the radius slightly
        const r = baseRadius + Math.sin(time * 2 + i) * 20;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(0.6, orb.color.replace('0.4)', '0.1)'));
        grad.addColorStop(1, orb.color.replace('0.4)', '0)'));

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`w-full h-full blur-[80px] opacity-60 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000 ${className}`} 
    />
  );
};