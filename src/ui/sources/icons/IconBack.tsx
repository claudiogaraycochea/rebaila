import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function IconBack(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 199.404 199.404"
      fill="#999999"
      {...props}
    >
      <Path d="M135.412 0L35.709 99.702l99.703 99.702 28.283-28.285-71.418-71.417 71.418-71.417z" />
    </Svg>
  );
}

export default IconBack;
