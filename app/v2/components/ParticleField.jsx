import { useEffect, useRef } from 'react';

// A deliberately small canvas renderer: no WebGL context or large 3D bundle.
export default function ParticleField({ mode, paused }) {
  const canvasRef = useRef(null);
  const modeRef = useRef(mode);
  const pausedRef = useRef(paused);
  useEffect(() => { modeRef.current = mode; }, [mode]);
  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = { x: -1000, y: -1000 };
    let width = 0, height = 0, frame = 0, time = 0, last = 0, active = true, transition = 0;
    function resize() {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width; height = bounds.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr; canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const intersection = new IntersectionObserver(([entry]) => { active = entry.isIntersecting; });
    intersection.observe(canvas);
    const move = (event) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left; pointer.y = event.clientY - bounds.top;
    };
    const leave = () => { pointer.x = -1000; pointer.y = -1000; };
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerleave', leave);
    function render(now) {
      frame = requestAnimationFrame(render);
      if (!active || document.hidden || now - last < 32) return;
      const moving = !reduced.matches && !pausedRef.current;
      if (moving) time += Math.min((now - (last || now)) / 1000, 0.05);
      last = now;
      transition += (modeRef.current - transition) * 0.045;
      context.clearRect(0, 0, width, height);
      const centerY = height * 0.51;
      const converge = width * (width < 600 ? 0.91 : 0.71);
      const cols = width < 600 ? 75 : 145;
      const rows = width < 600 ? 20 : 30;
      const speed = time * (0.23 + transition * 0.035);
      const points = [];
      for (let i = 0; i < cols; i++) {
        const p = i / (cols - 1);
        const x = -70 + p * (converge + 70);
        const amplitude = (1 - Math.pow(p, 0.7)) * height * 0.48 + 13;
        for (let j = 0; j < rows; j++) {
          const angle = j / rows * Math.PI * 2 + p * (5.6 + transition * 1.7) - speed;
          let y = centerY + Math.cos(angle) * amplitude;
          const z = Math.sin(angle);
          let px = x + Math.sin(angle + p * 3) * (1 - p) * 22;
          y += Math.sin(p * 8 - speed) * 17 * Math.sin(p * Math.PI);
          if (moving) {
            const dx = px - pointer.x, dy = y - pointer.y;
            const distance = Math.hypot(dx, dy);
            if (distance > 0 && distance < 100) {
              px += dx / distance * (100 - distance) * 0.26;
              y += dy / distance * (100 - distance) * 0.26;
            }
          }
          const pulse = Math.pow(Math.max(0, Math.sin(p * 12 - time * 1.1)), 6);
          points.push({ x: px, y, z, r: (z + 1) * 0.52 + 0.75, alpha: 0.14 + (z + 1) * 0.22 + pulse * 0.23, white: (i + j * 3) % 11 < 3 });
        }
      }
      points.sort((a, b) => a.z - b.z);
      for (const point of points) {
        context.beginPath();
        context.fillStyle = point.white ? `rgba(193,227,255,${point.alpha})` : `rgba(54,164,255,${point.alpha})`;
        context.arc(point.x, point.y, point.r, 0, Math.PI * 2); context.fill();
      }
      // The stream resolves into an ordered dot grid, echoing a design becoming code.
      if (width > 600) {
        const start = converge + 18, end = width - 25;
        const columns = Math.floor((end - start) / 8);
        for (let i = 0; i < columns; i++) for (let j = -5; j <= 5; j++) {
          const bright = Math.sin(i * 0.23 - time * 1.4 + transition) > 0.5;
          context.beginPath();
          context.fillStyle = `rgba(${bright ? '133,205,255' : '39,110,170'},${bright ? 0.72 : 0.3})`;
          context.arc(start + i * 8, centerY + j * 8, 1.6, 0, Math.PI * 2); context.fill();
        }
      }
    }
    resize(); frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame); resizeObserver.disconnect(); intersection.disconnect();
      canvas.removeEventListener('pointermove', move); canvas.removeEventListener('pointerleave', leave);
    };
  }, []);
  return <canvas className="particle-canvas" ref={canvasRef} aria-hidden="true" />;
}
