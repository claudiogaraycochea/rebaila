import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { Color } from "../colors/Colors";

function IconUser(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 46 46"
      fill={Color.primary}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path d="M22.766.001C10.194.001 0 10.193 0 22.766s10.193 22.765 22.766 22.765c12.574 0 22.766-10.192 22.766-22.765S35.34.001 22.766.001zm0 6.807a7.53 7.53 0 11.001 15.061 7.53 7.53 0 01-.001-15.061zm-.005 32.771a16.708 16.708 0 01-10.88-4.012 3.209 3.209 0 01-1.126-2.439c0-4.217 3.413-7.592 7.631-7.592h8.762c4.219 0 7.619 3.375 7.619 7.592a3.2 3.2 0 01-1.125 2.438 16.702 16.702 0 01-10.881 4.013z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h45.532v45.532H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default IconUser;
