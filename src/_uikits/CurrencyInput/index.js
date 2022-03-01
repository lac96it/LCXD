import React, { useMemo } from 'react';

import { StyleSheet, View, Text, TextInput } from 'react-native';
import NumberFormat from 'react-number-format';

import styles from '../CommonStyles';

function CurrencyInput({ style, invalid, label, required, error, onChangeValue, value, suffix, prefix, decimal = false, ...props }) {

  const invalidStyle = useMemo(() => {

    if (!invalid) return {};

    return {
      borderColor: '#f5222d',
      borderWidth: 2
    }
  });

  const onChangeText = (v) => {
    let num = v.split(',').join('')

    onChangeValue && onChangeValue(num)
  }

  return (
    <View>

      {!!label && (<Text style={[]}>{label} {!!required && <Text style={[styles.text_red_6]}>*</Text>}</Text>)}

      <NumberFormat
        value={value}
        displayType={'text'}
        thousandSeparator={true}
        customNumerals={['.']}
        renderText={localValue => {

          if (decimal === true) {
            if (value && value.toString().endsWith('.') && !localValue.includes('.')) {
              localValue += '.';
            } else if (value && localValue.toString().endsWith('.') && !value.toString().includes('.')) {
              localValue = localValue.slice(0, -1);
            }
          }

          return (
            <View style={[
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
                underlineColorAndroid="transparent"
                style={StyleSheet.flatten([style, invalidStyle])}
                value={localValue}
                keyboardType="numeric"
                onChangeText={onChangeText}
                style={[
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
                  !!suffix && {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                  styles.p_sm,
                  styles.fontSize_md_1,
                  style,
                  invalidStyle
                ]}
              />
              {!!suffix && (
                <View
                  style={[
                    styles.bg_primary,
                    styles.align_items_center,
                    styles.justify_content_center,
                    {
                      borderTopRightRadius: 30,
                      borderBottomRightRadius: 30,
                    },
                    styles.p_sm
                  ]}
                >
                  {prefix}
                </View>
              )}
            </View>
          )
        }}
        {...props}
      />

      {!!error?.message && (
        <Text style={[styles.text_red_6]}>{error?.message}</Text>
      )}
    </View>
  );
}

export default CurrencyInput;