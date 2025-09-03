'use client';

import React from 'react';

export default function PaperBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    // Only run in browser
    import('paper/dist/paper-full').then((paperModule) => {
      const paper = paperModule.default;
      if (!canvasRef.current) return;

      paper.setup(canvasRef.current);

      const path = new paper.Path({
        strokeColor: '#12345655',
        strokeWidth: 2,
        closed: false,
      });

      let count = 0;
      const center = paper.view.center;

      paper.view.onFrame = (event: any) => {
        count += event.delta;
        path.add(new paper.Point(center.x + Math.sin(count) * 150, center.y + Math.cos(count) * 150));
        if (path.segments.length > 100) {
          path.removeSegment(0);
        }
      };
    });

    return () => {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      width={typeof window !== 'undefined' ? window.innerWidth : 1920}
      height={typeof window !== 'undefined' ? window.innerHeight : 1080}
    />
  );
}
