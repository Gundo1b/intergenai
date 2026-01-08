import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'coding' | 'chat' | 'image' | 'video' | 'default';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'default', 
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle configuration based on variant and intensity
  const getConfig = () => {
    const configs = {
      coding: {
        particleCount: { low: 15, medium: 25, high: 40 },
        colors: ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B'],
        maxSize: { low: 2, medium: 3, high: 4 },
        speed: { low: 0.5, medium: 1, high: 1.5 }
      },
      chat: {
        particleCount: { low: 12, medium: 20, high: 30 },
        colors: ['#8B5CF6', '#3B82F6', '#06B6D4', '#10B981'],
        maxSize: { low: 1.5, medium: 2.5, high: 3.5 },
        speed: { low: 0.3, medium: 0.7, high: 1.2 }
      },
      image: {
        particleCount: { low: 20, medium: 35, high: 50 },
        colors: ['#EC4899', '#8B5CF6', '#06B6D4', '#F59E0B'],
        maxSize: { low: 2, medium: 3, high: 5 },
        speed: { low: 0.4, medium: 0.8, high: 1.3 }
      },
      video: {
        particleCount: { low: 18, medium: 30, high: 45 },
        colors: ['#DC2626', '#7C3AED', '#059669', '#D97706'],
        maxSize: { low: 2.5, medium: 3.5, high: 4.5 },
        speed: { low: 0.6, medium: 1.1, high: 1.6 }
      },
      default: {
        particleCount: { low: 10, medium: 18, high: 25 },
        colors: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'],
        maxSize: { low: 1, medium: 2, high: 3 },
        speed: { low: 0.5, medium: 0.8, high: 1.2 }
      }
    };

    return configs[variant];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const config = getConfig();
    const particleCount = config.particleCount[intensity];
    const colors = config.colors;
    const maxSize = config.maxSize[intensity];
    const speed = config.speed[intensity];

    // Create particles
    interface Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      opacity: number;
      life: number;
      maxLife: number;
    }

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * maxSize + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        opacity: Math.random() * 0.5 + 0.1,
        life: Math.random() * 200 + 100,
        maxLife: 200 + Math.random() * 100
      });
    }

    // Animation loop
    let animationId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Respawn particle if life is over
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.size = Math.random() * maxSize + 0.5;
          particle.color = colors[Math.floor(Math.random() * colors.length)];
          particle.vx = (Math.random() - 0.5) * speed;
          particle.vy = (Math.random() - 0.5) * speed;
        }

        // Calculate opacity based on life
        const lifeRatio = particle.life / particle.maxLife;
        particle.opacity = lifeRatio * 0.3 + 0.1;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect for larger particles
        if (particle.size > maxSize * 0.7) {
          ctx.shadowBlur = particle.size * 2;
          ctx.shadowColor = particle.color;
          ctx.fill();
        }
        ctx.restore();
      });

      // Draw connections between nearby particles
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.globalAlpha = (120 - distance) / 120 * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [variant, intensity]);

  return (
    <>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none z-0 ${className}`}
        style={{ background: 'transparent' }}
      />
      
      {/* Gradient overlay for depth */}
      <div 
        className={`fixed inset-0 pointer-events-none z-0 ${
          variant === 'coding' ? 'bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5' :
          variant === 'chat' ? 'bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5' :
          variant === 'image' ? 'bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5' :
          variant === 'video' ? 'bg-gradient-to-br from-red-500/5 via-transparent to-purple-500/5' :
          'bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5'
        }`}
      />
      
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(intensity === 'high' ? 8 : intensity === 'medium' ? 5 : 3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute opacity-10 ${
              variant === 'coding' ? 'bg-blue-500' :
              variant === 'chat' ? 'bg-purple-500' :
              variant === 'image' ? 'bg-pink-500' :
              variant === 'video' ? 'bg-red-500' :
              'bg-blue-500'
            }`}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </>
  );
};