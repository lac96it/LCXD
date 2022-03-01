import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import styles from '../CommonStyles';

function BtnCheckbox({ label, onChange, checked, style = [], textStyle = [], ...props }) {

  const onLocalPress = () => {
    onChange && onChange();
  }

  return (
    <TouchableOpacity
      onPress={onLocalPress}
      style={[
        styles.p_sm,
        styles.flex_row,
        checked ? styles.bg_success : styles.bg_secondary_4,
        styles.align_items_center,
        {
          borderRadius: 30
        },
        ...style
      ]}
      {...props}
    >
      <Icon name="check" size={40} style={[styles.text_white]} />
      <Text style={[
        styles.fontSize_md,
        checked ? styles.text_white : styles.text_black,
        styles.ml_sm,
        ...textStyle
      ]}>{label}</Text>
    </TouchableOpacity>
  );
}

export default BtnCheckbox;