import * as React from 'react';

export interface IArrowProps {
  className?: string;
  onClick?: () => void;
}

export function Arrow (props: IArrowProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={props.onClick}
    >
      <path
        d="M8 3.33325V12.6666"
        stroke="white"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.6668 8L8.00016 12.6667L3.3335 8"
        stroke="white"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
