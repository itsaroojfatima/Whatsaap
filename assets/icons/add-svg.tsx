import Svg, { Path } from "react-native-svg";

const AddIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path
      fill="#ffffff"
      fillRule="nonzero"
      d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-1 10h-4v4h-2v-4h-4v-2h4V6h2v4h4v2z"
    />
  </Svg>
);

export default AddIcon;
