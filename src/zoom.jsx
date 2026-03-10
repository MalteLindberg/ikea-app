import { useRef, useEffect } from "react";
import ivarBuildImage3 from "../assets/ivarBuildImage3.jpg";

export default function ZoomImage() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;

    let startDistance = 0;
    let scale = 1;

    let startX = 0;
    let startY = 0;

    let translateX = 0;
    let translateY = 0;

    function getDistance(touches) {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }

    function clampPan() {
      const containerRect = container.getBoundingClientRect();
      const imgWidth = img.offsetWidth * scale;
      const imgHeight = img.offsetHeight * scale;

      const maxX = Math.max(0, (imgWidth - containerRect.width) / 1.5);
      const maxY = Math.max(0, imgHeight - containerRect.height / 1.5);

      translateX = Math.min(maxX, Math.max(-maxX, translateX));
      translateY = Math.min(maxY, Math.max(-maxY, translateY));
    }

    function updateTransform() {
      clampPan();
      img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    function touchStart(e) {
      if (e.touches.length === 2) {
        startDistance = getDistance(e.touches);
      }

      if (e.touches.length === 1) {
        startX = e.touches[0].clientX - translateX;
        startY = e.touches[0].clientY - translateY;
      }
    }

    function touchMove(e) {
      if (e.touches.length === 2) {
        e.preventDefault();

        const newDistance = getDistance(e.touches);
        const zoomFactor = newDistance / startDistance;

        scale = Math.min(Math.max(1, scale * zoomFactor), 5);
        startDistance = newDistance;

        updateTransform();
      }

      if (e.touches.length === 1 && scale > 1) {
        translateX = e.touches[0].clientX - startX;
        translateY = e.touches[0].clientY - startY;

        updateTransform();
      }
    }

    container.addEventListener("touchstart", touchStart);
    container.addEventListener("touchmove", touchMove);

    return () => {
      container.removeEventListener("touchstart", touchStart);
      container.removeEventListener("touchmove", touchMove);
    };
  }, []);

  return (
    <div className="zoomInContainer" ref={containerRef}>
      <img ref={imgRef} src={ivarBuildImage3} className="zoomImage" />
    </div>
  );
}
