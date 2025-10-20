import { useEffect, useRef } from 'react';

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;
    let glowIntensity = 0;
    let glowDirection = 1;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${particle.opacity})`;
        ctx.fill();

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        gradient.addColorStop(0, `rgba(6, 182, 212, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((rotation * Math.PI) / 180);

      const fontSize = Math.min(canvas.width * 0.15, 180);
      ctx.font = `bold ${fontSize}px Arial, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const glowAmount = 20 + glowIntensity * 30;
      ctx.shadowBlur = glowAmount;
      ctx.shadowColor = `rgba(6, 182, 212, ${0.6 + glowIntensity * 0.4})`;

      const gradient = ctx.createLinearGradient(-200, -100, 200, 100);
      gradient.addColorStop(0, `rgba(6, 182, 212, ${0.15 + glowIntensity * 0.15})`);
      gradient.addColorStop(0.5, `rgba(8, 145, 178, ${0.2 + glowIntensity * 0.2})`);
      gradient.addColorStop(1, `rgba(14, 116, 144, ${0.15 + glowIntensity * 0.15})`);
      ctx.fillStyle = gradient;
      ctx.fillText('Top A', 0, 0);

      ctx.strokeStyle = `rgba(6, 182, 212, ${0.4 + glowIntensity * 0.3})`;
      ctx.lineWidth = 3;
      ctx.strokeText('Top A', 0, 0);

      ctx.shadowBlur = glowAmount * 1.5;
      ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 + glowIntensity * 0.2})`;
      ctx.lineWidth = 6;
      ctx.strokeText('Top A', 0, 0);

      ctx.restore();

      glowIntensity += 0.01 * glowDirection;
      if (glowIntensity >= 1 || glowIntensity <= 0) {
        glowDirection *= -1;
      }

      rotation += 0.15;
      if (rotation >= 360) rotation = 0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};
