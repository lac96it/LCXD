import React from 'react';

import { View } from 'react-native';
import theme from '../../configs/theme';

function Divider({ style }) {
  return (
    <View style={[
      {
        width: '100%',
        height: 1,
        backgroundColor: theme.border.grey3,
        marginVertical: 5
      },
      style
    ]}></View>
  );
}

export default Divider;