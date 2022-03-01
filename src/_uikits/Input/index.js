import React, { useMemo } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

import styles from '../CommonStyles';

function Input({ style, invalid, label, required, error, prefix, ...props }, ref) {

  const invalidStyle = useMemo(() => {

    if (!invalid) return {};

    return {
      borderColor: '#f5222d',
      borderWidth: 2
    }
  });

  return (
    <View style={[
      styles.flex_row
    ]}>

      {!!label && (<Text style={styles.common_label}>{label} {!!required && <Text style={[styles.text_red_6]}>*</Text>}</Text>)}

      <View style={[
        styles.flex_grow_1,
        styles.flex_row
      ]}>
        {!!prefix && (
          <View
            style={[
              styles.bg_primary,
              styles.align_items_center,
              styles.justify_content_center,
              {
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
              },
              styles.p_sm
            ]}
          >
            {prefix}
          </View>
        )}
        <TextInput
          style={StyleSheet.flatten([
            styles.border_1,
            styles.border_secondary,
            styles.flex_grow_1,
            {
              borderRadius: 30,
            },
            !!prefix && {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
            styles.p_sm,
            styles.fontSize_md_1,
            style,
            invalidStyle
          ])}
          autoCapitalize='none'
          autoCorrect={false}
          ref={ref}
          {...props}
        />
      </View>

      {!!error?.message && (
        <Text style={[styles.text_red_6]}>{error?.message}</Text>
      )}
    </View>
  );
}

export default React.forwardRef(Input);