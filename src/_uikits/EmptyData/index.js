import React from 'react';

import useTrans from '../../hooks/useTrans';

import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import { EmptyDataStyles } from './styles';

function EmptyData() {

  const trans = useTrans();

  return (
    <View style={EmptyDataStyles.container}>
      <View style={{
        height: 100,
        width: '100%'
      }}>
        <LottieView source={require('../../../assets/lotties/629-empty-box.json')} autoPlay loop />
      </View>

      <Text style={EmptyDataStyles.text}>{trans("common.empty")}</Text>
    </View>
  );
}

export default EmptyData;