import React, { useMemo } from 'react';
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import theme from '../../configs/theme';

import { ButtonStyles } from './styles';
import styles from '../CommonStyles';

function Button({ label, style, loading, disabled, type = "primary", ...props }) {

  const isDisabled = useMemo(() => loading || disabled, [loading, disabled]);

  const disabledStyle = useMemo(() => {
    if (!isDisabled) return {};

    return {
      backgroundColor: '#ccc'
    }
  }, [isDisabled]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={StyleSheet.flatten([
        {
          backgroundColor: theme.background[type]
        },
        ButtonStyles.button,
        style,
        disabledStyle])}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={theme.text.white} />
      ) : (
        <Text style={[ButtonStyles.text, styles.fontSize_md]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;