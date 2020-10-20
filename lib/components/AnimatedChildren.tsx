import * as React from "react";
import { Animated, ViewProps } from "react-native";
/**
 * ? Local Imports
 */
import {
  translateByAppearFrom,
  inputRangeByAppearFrom,
  outputRangeByAppearFrom,
  initialPositionByAppearFrom,
} from "./AnimatedUtils";

export type AppearFrom = "left" | "right" | "top" | "bottom";

interface IAnimatedChildrenProps extends ViewProps {
  delay: number;
  appearFrom: AppearFrom;
  animationDuration: number;
}

const AnimatedChildren: React.FC<IAnimatedChildrenProps> = ({
  delay,
  children,
  appearFrom,
  animationDuration,
  ...viewProps
}) => {
  const [animatedValue] = React.useState<Animated.Value>(
    new Animated.Value(initialPositionByAppearFrom[appearFrom]),
  );
  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    timeout = setTimeout(() => {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const inputRange = inputRangeByAppearFrom[appearFrom];
  const outputRange = outputRangeByAppearFrom[appearFrom];
  const opacity = animatedValue.interpolate({
    inputRange,
    outputRange,
  });
  const transform = [{ [translateByAppearFrom[appearFrom]]: animatedValue }];

  return (
    <Animated.View {...viewProps} style={{ opacity, transform }}>
      {children}
    </Animated.View>
  );
};

export default AnimatedChildren;
