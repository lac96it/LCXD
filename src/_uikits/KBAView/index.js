import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';


function KBAView({children, ...props}) {


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
     {...props}
     >
      {children}
    </KeyboardAvoidingView>
  );
}

export default KBAView;