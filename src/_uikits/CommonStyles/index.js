import { StyleSheet } from "react-native";
import BackgroundStyles from "./BackgroundStyles";
import BlockStyles from "./BlockStyles";
import BorderStyles from "./BorderStyles";
import DistanceStyles from "./DistanceStyles";
import IconStyles from "./IconStyles";
import TextStyles from "./TextStyles";
import UIKitStyles from './UIKitStyles';

export default CommonStyles = StyleSheet.flatten([
  BackgroundStyles,
  BlockStyles,
  BorderStyles,
  DistanceStyles,
  IconStyles,
  TextStyles,
  UIKitStyles
]);