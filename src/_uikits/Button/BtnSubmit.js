import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import styles from '../CommonStyles';

function BtnSubmit({ label = 'Save', style = [], textStyle = [], ...props }) {

  return (
    <TouchableOpacity
      style={[
        styles.p_sm,
        styles.flex_row,
        styles.bg_blue,
        styles.align_items_center,
        {
          borderRadius: 30
        },
        ...style
      ]}
      {...props}
    >
      <Text style={[
        styles.fontSize_md,
        styles.text_white,
        styles.ml_sm,
        ...textStyle
      ]}>{label}</Text>
      <Icon name="chevron-right" size={40} style={[styles.text_white]} />
    </TouchableOpacity>
  );
}

export default BtnSubmit;