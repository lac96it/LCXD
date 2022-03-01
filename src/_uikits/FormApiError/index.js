import React from 'react';
import { View, Text } from 'react-native';

import { FormApiErrorStyles } from './styles';

function FormApiError({ message }) {
  return (
    <View style={FormApiErrorStyles.container}>
      <Text style={FormApiErrorStyles.message}>{message}</Text>
    </View>
  );
}

export default FormApiError;