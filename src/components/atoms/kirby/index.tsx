import * as React from 'react';
import './style.css';

export interface IKirbyProps {
}

export function Kirby (props: IKirbyProps) {
  const [positionY, setPositionY] = React.useState(0);
 React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPositionY(event.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }
  , []);
  return (
    <div
      className="kirby"
      style={{
        top: positionY,
        transition: "top 1s ease-in-out",
      }}
    ></div>
  );
}
