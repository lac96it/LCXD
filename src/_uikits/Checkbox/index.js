import React, { useMemo } from 'react';

import theme from '../../configs/theme';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { CheckboxStyles } from './styles';

function Checkbox({ style, invalid, onChange, label, ...props }) {
  const invalidStyle = useMemo(() => {

    if (!invalid) return {};

    return {
      borderColor: '#f5222d',
      borderWidth: 2
    }
  })

  return (
    <View style={CheckboxStyles.wrapper}>
      <CheckBox
        style={StyleSheet.flatten([CheckboxStyles.checkbox, style, invalidStyle])}
        onValueChange={onChange}
        tintColors={{
          'true': theme.text.primary
        }}
        onTintColor={theme.text.primary}
        onCheckColor={theme.text.primary}
        {...props}
      />
      {!!label && <TouchableOpacity style={CheckboxStyles.labelWrapper} onPress={() => onChange(!props?.value)}><Text style={CheckboxStyles.label}>{label}</Text></TouchableOpacity>}
    </View>
  );
}

export default Checkbox;