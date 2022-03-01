import React from 'react';

import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import styles from '../_uikits/CommonStyles';

function HomeScreen({navigation}) {

  const gotoShakeCount = () => {
    navigation.push("ShakeCount");
  }

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={[
          styles.p_sm,
          styles.bg_primary,
          styles.m_sm,
          {
            borderRadius: 30
          }
        ]}
        onPress={gotoShakeCount}
      >
        <Text>Con lắc đếm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;