import * as React from "react";

export interface IAngleProps {
  className?: string;
  onClick?: () => void;
}

export function Angle(props: IAngleProps) {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={props.onClick}
    >
      <g clip-path="url(#clip0_402_188)">
        <path
          d="M1.17188 1.8999L6.40551 6.8999L11.6392 1.8999"
          stroke="white"
          stroke-width="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_402_188">
          <rect
            width="12"
            height="7"
            fill="white"
            transform="translate(0.200195 0.899902)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
