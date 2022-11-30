import React, { useRef, useEffect } from "react";
import { getPalette } from "../utils/Themes.js";
import "../styles/canvas.css";

const Canvas = ({ useThemeColor }) => {
  const canvasRef = useRef(null);
  const palette = getPalette(useThemeColor);

  useEffect(() => {
    const getGradients = (cx) => {
      return palette.map(([r, g, b]) => {
        const gradient = cx.createRadialGradient(0, 0, 1, 0, 0, 50);
        gradient.addColorStop(0, `rgba(${r},${g},${b},0.1)`);
        gradient.addColorStop(0.2, `rgba(${r},${g},${b},0.2)`);
        gradient.addColorStop(0.4, `rgba(${r},${g},${b},0.4)`);
        gradient.addColorStop(0.6, `rgba(${r},${g},${b},0.8)`);
        gradient.addColorStop(0.8, `rgba(${r},${g},${b},0.4)`);
        gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
        return gradient;
      });
    };

    const watercolor = (cv, gradients) => {
      return {
        x: Math.random() * cv.width,
        y: Math.random() * cv.height,
        color: gradients[Math.floor(Math.random() * palette.length)],
        radio: Math.ceil((Math.random() * cv.width) / 2),
        duration: Math.ceil(Math.random() * 2000),
      };
    };

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

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const gradients = getGradients(context);
    context.globalCompositeOperation = "source-over";
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "low";

    const getAndDrawWatercolor = () => {
      const wc = watercolor(canvas, gradients);
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
  }, [palette, useThemeColor]);

  return <canvas className="canvasBackground" ref={canvasRef} />;
};

export default Canvas;
