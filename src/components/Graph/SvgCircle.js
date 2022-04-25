import { useState } from "react";
import css from "./Graph.module.css";
import SvgLine from "./SvgLine";

const SvgCircle = (props) => {
  const [showValue, setShowValue] = useState(false);
  const colorPalette = ['#788cff', '#BD9DBD', '#FBFF7A', '#FFBF7A', '#FF7B7A'];

  const valueBoxHandler = (event) => {
    if (event.type === "mouseenter") {
      setShowValue(true);
    }
    if (event.type === "mouseleave") {
      setShowValue(false);
    }
  };

  return (
    <>
      {showValue && (
        <text
          className={css.graphText}
          x={props.xCoordinate - 5}
          y={`${props.yCoordinate - 3}%`}
        >
          {props.pointValue}
        </text>
      )}
      <circle
        id={props.indexID}
        onMouseEnter={valueBoxHandler}
        onMouseLeave={valueBoxHandler}
        cx={props.xCoordinate}
        cy={`${props.yCoordinate}%`}
        r="6"
        stroke="rgb(0, 0, 0, 0%)"
        strokeWidth="10"
        fill={colorPalette[props.rpe]}
      />
      {props.lineProperties.x1 && props.lineProperties.y1 && (
        <SvgLine
          gradient={colorPalette}
          lineProperties={{
            ...props.lineProperties,
            x2: props.xCoordinate,
            y2: props.yCoordinate,
          }}
        />
      )}
    </>
  );
};

export default SvgCircle;
