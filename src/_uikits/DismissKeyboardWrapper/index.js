import React from 'react';
import { Keyboard, View, TouchableWithoutFeedback } from 'react-native';

function DismissKeyboardWrapper({ onPress, children, ...props }) {
  return (
    <TouchableWithoutFeedback
      onPress={(...args) => {
        Keyboard.dismiss();
        onPress && onPress(...args);
      }}
      {...props}
    >
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default DismissKeyboardWrapper;