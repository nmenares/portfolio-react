import React, { useRef, useEffect } from "react";
import "../styles/canvas.css";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const drawWatercolor = (cx, wc) => {
    cx.save();
    cx.globalAlpha = 100 / wc.duration;
    cx.translate(wc.x, wc.y);
    cx.beginPath();
    cx.arc(0, 0, wc.radio, 0, Math.PI * 2);
    cx.fillStyle = wc.color;
    cx.fill();
    cx.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.globalCompositeOperation = "source-over";
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "low";

    const palette = [
      [227, 227, 227],
      [36, 120, 143],
      [132, 141, 171],
      [171, 204, 177],
    ];

    const gradients = palette.map(([r, g, b]) => {
      const gradient = context.createRadialGradient(0, 0, 1, 0, 0, 50);
      gradient.addColorStop(0, `rgba(${r},${g},${b},1)`);
      gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
      return gradient;
    });

    const watercolor = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: gradients[Math.floor(Math.random() * palette.length)],
        radio: Math.ceil(Math.random() * 50),
        duration: Math.ceil(Math.random() * 1000),
      };
    };

    const getAndDrawWatercolor = () => {
      const wc = watercolor();
      drawWatercolor(context, wc);
    };

    let animationFrameId;

    const render = () => {
      getAndDrawWatercolor();
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas className="canvasBackground" ref={canvasRef} {...props} />;
};

export default Canvas;
