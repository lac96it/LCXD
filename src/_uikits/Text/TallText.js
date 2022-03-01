import React from 'react';

import { Text } from 'react-native';

function TallText({ children, style, ...props }) {
  return (
    <Text
      style={[
        { fontFamily: 'Oswald-Regular' },
        style
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

export default TallText;