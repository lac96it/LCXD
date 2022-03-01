import React, { useMemo, useState } from 'react';

import _ from 'lodash';

import { View, Text } from 'react-native';
import theme from '../../configs/theme';

function Badge({ children, style, textStyle, size = 25 }) {

  const [textWidth, setTextWidth] = useState(0);

  const onLayoutBalanceText = (e) => {
    setTextWidth(_.ceil(e?.nativeEvent?.layout?.width || 0));
  }

  const calculateStyles = useMemo(() => {
    let wrapperSize = size;

    if ((textWidth + 10) > wrapperSize) wrapperSize = textWidth + 10;

    return {
      width: wrapperSize
    }
  }, [textWidth]);

  return (
    <View
      style={[
        {
          backgroundColor: theme.background.red6,
          minWidth: calculateStyles.width,
          minHeight: size,
          borderRadius: 12.5,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style
      ]}
    >
      <Text
        style={[
          {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
          },
          textStyle
        ]}
        onLayout={onLayoutBalanceText}
      >{children}</Text>
    </View>
  );
}

export default Badge;