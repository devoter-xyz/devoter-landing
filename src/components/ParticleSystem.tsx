'use client';

import { useEffect, useRef } from 'react';

// Particle type definition
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
};

export default function ParticleSystem() {
  // Refs to avoid unnecessary re-renders
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafIdRef = useRef<number | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  // Initialize particles based on screen size
  const initParticles = () => {
    if (!canvasRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Calculate number of particles based on screen width (1 per 30px, max 50)
    const particleCount = Math.min(Math.floor(width / 30), 50);
    const particles: Particle[] = [];
    
    // Colors for particles
    const colors = ['#6D28D9', '#8B5CF6']; // Two purple shades
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    
    particlesRef.current = particles;
  };

  // Handle canvas resizing
  const handleResize = () => {
    if (!canvasRef.current || !contextRef.current) return;
    
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    
    // Re-initialize particles for new size
    initParticles();
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    
    if (!canvas || !ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const particles = particlesRef.current;
    const mousePos = mouseRef.current;
    
    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      
      // Apply movement
      p.x += p.vx;
      p.y += p.vy;
      
      // Apply friction to slow down
      p.vx *= 0.99;
      p.vy *= 0.99;
      
      // Bounce off edges
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      
      // Mouse interaction (gentle push)
      const dx = p.x - mousePos.x;
      const dy = p.y - mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const angle = Math.atan2(dy, dx);
        const force = (100 - distance) / 500;
        p.vx += Math.cos(angle) * force;
        p.vy += Math.sin(angle) * force;
      }
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba');
      ctx.fill();
      
      // Draw connections to nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          // Make line opacity based on distance
          const opacity = (100 - distance) / 100 * 0.2;
          ctx.strokeStyle = `rgba(110, 110, 160, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    
    // Continue animation loop
    rafIdRef.current = requestAnimationFrame(animate);
  };

  // Setup on component mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Get context
    const context = canvas.getContext('2d');
    if (!context) return;
    contextRef.current = context;
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Initialize particles
    initParticles();
    
    // Start animation
    rafIdRef.current = requestAnimationFrame(animate);
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    });
    
    // Cleanup on unmount
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', (e) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
} 