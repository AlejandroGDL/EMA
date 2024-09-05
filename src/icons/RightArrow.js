import * as React from "react";
import Svg, { Path } from "react-native-svg";

const RightArrow = (props) => (
  <Svg
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icon-tabler-arrow-narrow-right"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="none"
      d="M0 0h24v24H0z"
    />
    <Path d="M5 12h14M15 16l4-4M15 8l4 4" />
  </Svg>
);

export default RightArrow;
