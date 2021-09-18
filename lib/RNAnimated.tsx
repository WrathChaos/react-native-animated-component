import * as React from "react";
import { View, StyleProp, ViewStyle, FlatList, Alert } from "react-native";
/**
 * ? Local Imports
 */
import AnimatedChildren from "./components/AnimatedChildren";
type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
const DEFAULT_DELAY = 200;
const ANIMATION_DURATION = 300;

export type AppearFrom = "left" | "right" | "top" | "bottom";

export interface IRNAnimatedProps {
  style?: CustomStyleProp;
  children?: React.ReactNode;
  initialDelay?: number;
  delayInterval?: number;
  appearFrom?: AppearFrom;
  animationDuration?: number;
}

const RNAnimated: React.FC<IRNAnimatedProps> = ({
  style,
  children,
  delayInterval,
  initialDelay,
  animationDuration = ANIMATION_DURATION,
  appearFrom = "left",
}) => {
  let delay = initialDelay ?? DEFAULT_DELAY;
  return (
    <View style={style}>
      {React.Children.map(children, (child, index) => {
        if (index !== 0) {
          delay += delayInterval ?? DEFAULT_DELAY;
        }
        return (
          <AnimatedChildren
            appearFrom={appearFrom}
            delay={delay}
            animationDuration={animationDuration}
          >
            {child}
          </AnimatedChildren>
        );
      })}
    </View>
  );
};

export default RNAnimated;
