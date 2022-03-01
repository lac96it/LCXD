import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

function RemovableListItem({ children, style, ...props }, ref) {

  const anim = useRef(new Animated.Value(0)).current;

  useImperativeHandle(ref, () => ({
    start: startAnim
  }))

  const startAnim = (cb) => {
    anim.setValue(0);

    Animated.timing(anim, {
      toValue: Dimensions.get('screen').width,
      duration: 500,
      useNativeDriver: true
    }).start(cb);
  }

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [{ translateX: anim }]
        }
      ]}
      {...props}
    >
      {children}
    </Animated.View>
  );
}

export default forwardRef(RemovableListItem);