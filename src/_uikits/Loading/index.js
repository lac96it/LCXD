import React from 'react';

import theme from '../../configs/theme';

import { View, ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from '../CommonStyles';

function Loading({ type, ...props }) {

  if (type === 'screen') return (
    <View style={[
      styles.flex_1,
      styles.justify_content_center,
      styles.align_items_center,
      {
        backgroundColor: 'rgba(255,255,255,0.7)',
      }
    ]}>
      <View style={[
        {
          width: 300,
          height: 300,
          borderRadius: 40
        },
      ]}>
        <LottieView source={require('../../../assets/lotties/loading.json')} autoPlay loop />
      </View>
    </View>
  )

  return (
    <ActivityIndicator color={theme.text.primary} {...props} />
  );
}

export default Loading;