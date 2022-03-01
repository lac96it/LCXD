import React, { useMemo, useState } from 'react';

import theme from '../../configs/theme';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import BottomModal from '../BottomModal';
import Button from '../Button';

import { SelectStyles as styles } from './styles';

/**
 * 
 * @param {*} options must be [{ id: string|number, title: string|number, ...any }] 
 * @param {*} ref 
 * @returns 
 */

function Select({ style, invalid, label, required, error, options = [], value, placeholder = 'N/A', onChange, ...props }, ref) {

  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  }

  const invalidStyle = useMemo(() => {

    if (!invalid) return {};

    return {
      borderColor: '#f5222d',
      borderWidth: 2
    }
  });

  const selectedValue = useMemo(() => {
    if (!value) return placeholder;

    return options.filter(i => i.id === value)?.[0];
  }, [value, options, placeholder]);

  const onPressItem = (optionID, option) => {
    onChange && onChange(optionID, option);

    toggleModal();
  }

  return (
    <>
      <View style={styles.container}>
        {!!label && (<Text style={styles.label}>{label} {!!required && <Text style={styles.required}>*</Text>}</Text>)}

        <TouchableOpacity
          onPress={toggleModal}
          style={[styles.wrapperSelect, invalidStyle]}
        >
          <Text numberOfLines={1} style={styles.selectedText}>{selectedValue?.title || placeholder}</Text>

          <Icon name="right" size={18} color={theme.border.primary} />
        </TouchableOpacity>
      </View>

      <BottomModal
        visible={visible}
        onHide={toggleModal}
      >
        <View style={styles.modalContainer}>
          {options.map((option, idx) => (
            <Button
              onPress={() => onPressItem(option.id, option)}
              type={option.id === value ? 'primary' : 'grey6'}
              label={option.title}
              key={`option-${idx}`}
              style={styles.option}
            />
          ))}
        </View>
      </BottomModal>
    </>
  );
}

export default React.forwardRef(Select);