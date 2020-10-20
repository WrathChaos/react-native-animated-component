import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./RNAnimated.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IRNAnimatedProps {
  style?: CustomStyleProp;
  children?: React.ReactNode;
  renderIcon?(): JSX.Element;
}

const RNAnimated: React.FC<IRNAnimatedProps> = ({
  style,
  children,
  renderIcon,
}) => {
  return (
    <View style={[styles.container, style]}>
      {children}
      {renderIcon}
    </View>
  );
};

export default RNAnimated;
