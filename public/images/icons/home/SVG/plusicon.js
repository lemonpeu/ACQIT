import * as React from "react";

function PlusIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40.39 40.39"
      {...props}
    >
      <g data-name="Layer 2">
        <g data-name="SERVICIOS ACT">
          <g data-name="SERVICIOS TODO ACTIVO">
            <rect
              x={0.37}
              y={0.38}
              width={39.64}
              height={39.64}
              rx={19.82}
              fill="none"
              stroke="#fff"
              strokeMiterlimit={10}
              strokeWidth={0.75}
            />
            <path d={props.line} fill="#fff" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default PlusIcon;
