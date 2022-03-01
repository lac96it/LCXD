import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';

import { BackButtonStyles as styles } from './styles';

function BackButton({ size = 34, color = 'white', style, onPress }) {

  const navigation = useNavigation();

  const goBack = () => {
    if (onPress) {
      onPress();
      setTimeout(() => {
        navigation.goBack();
      }, 200);
    }
    else navigation.goBack();
  }

  return (
    <TouchableOpacity onPress={goBack} style={[styles.icon, style]}>
      <Icon name="arrowleft" size={size} color={color} />
    </TouchableOpacity>
  );
}

export default BackButton;