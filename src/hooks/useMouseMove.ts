import React, { useEffect } from "react";

export function useMouseMove(ref: React.MutableRefObject<any>) {
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { current } = ref;
      if (current) {
        const { top, left, width, height } = current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const moveX = clientX - centerX;
        const moveY = clientY - centerY;
        const percentX = moveX / (width / 2);
        const percentY = moveY / (height / 2);
        setRotateX(percentY);
        setRotateY(-percentX);
        setMouseX(clientX - left);
        setMouseY(clientY - top);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return { rotateX, rotateY, mouseX, mouseY };
}
