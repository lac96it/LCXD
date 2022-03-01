import React from 'react';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Platform, KeyboardAvoidingView, ScrollView } from 'react-native';

import DismissKeyboardWrapper from '../DismissKeyboardWrapper';

function KeyboardScrollView({ children, style, viewIsInsideTabBar = false }) {

  if (Platform.OS !== 'ios') return (
    <KeyboardAvoidingView
      enabled
      style={[style, { flex: 1 }]}
    >
      <ScrollView
        keyboardShouldPersistTaps={"always"}
        showsVerticalScrollIndicator={false}
      >
        <DismissKeyboardWrapper style={{ flex: 1 }}>
          {children}
        </DismissKeyboardWrapper>
      </ScrollView>
    </KeyboardAvoidingView>
  )

  return (
    <KeyboardAwareScrollView
      style={style}
      viewIsInsideTabBar={viewIsInsideTabBar}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}
    >
      <DismissKeyboardWrapper style={{ flex: 1 }}>
        {children}
      </DismissKeyboardWrapper >
    </KeyboardAwareScrollView >
  );
}

export default KeyboardScrollView;