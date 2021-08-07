import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"

function IconLogo(props: SvgProps) {
  return (
    <Svg
      width={200}
      height={42}
      viewBox="0 0 306 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M181.849 71.388l-3.203-7.195h-19.39l-3.203 7.195h-10.335l18.279-38.171h10.25l18.279 38.171h-10.677zM168.994 42.48l-6.705 14.95h13.282l-6.577-14.95zM206.192 33.217h-9.481v38.171h9.481V33.217zM214.563 71.388V33.217h9.481v31.149h21.012v7.022h-30.493zM282.34 71.388l-3.203-7.195h-19.389l-3.203 7.195h-10.336l18.279-38.171h10.25l18.279 38.171H282.34zM269.485 42.48l-6.705 14.906h13.282l-6.577-14.906zM134.999 50.364c2.69-.862 6.363-2.758 6.278-8.315 0-1.853-.47-4.18-2.136-5.989-2.861-3.145-7.73-3.145-10.634-3.145H96.519v6.592h31.134c1.196 0 4.484-.043 4.484 4.179 0 4.696-4.441 4.222-5.253 4.222h-13.581v-5.6h-9.395v28.779h26.009c3.758 0 8.584 0 11.573-4.653.812-1.207 1.666-3.404 1.666-6.42 0-7.238-5.381-9.004-8.157-9.65zm-7.09 14.002h-14.563v-9.823h15.375c1.409 0 5.039.043 5.039 4.653 0 5.256-4.313 5.17-5.851 5.17z"
        fill="#121212"
      />
      <Path
        d="M95.153 32.872v6.592h32.543c.854 0 2.904-.043 3.929 1.68h9.652c-.128-1.68-.683-3.575-2.093-5.127-2.861-3.145-7.73-3.145-10.634-3.145H95.153z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M14.478 55.017V48.21H41.34v-9.09H16.4v-6.808h24.94v-8.616H15.546v-6.85h35.277v38.17H14.478zM64.744 41.532l-9.737 13.485h11.189l8.243-12.537c-2.435-.043-6.791-.259-9.695-.948z"
        fill="#4F00BA"
      />
      <Path
        d="M70.51 16.845c-3.288 0-4.698.216-6.278.69-4.868 1.465-7.559 5.687-7.559 10.727 0 .991.043 2.887 1.025 5.041 1.452 3.274 4.014 4.653 7.09 5.428 1.75.388 6.705.905 11.445.991h10.891V55.06h9.438V16.845H70.51zm5.253 17.406L64.83 28.219l10.933-6.031V34.25zm10.976 0l-10.933-6.032 10.933-6.031V34.25z"
        fill="#4F00BA"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={100.248}
          y1={24.959}
          x2={132.801}
          y2={49.028}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#4F00BA" />
          <Stop offset={0.435} stopColor="#4F00BA" stopOpacity={0.966} />
          <Stop offset={1} stopColor="#4F00BA" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default IconLogo
