import React from 'react';
import { WebView as RNWebView } from 'react-native-webview';

function WebView(props) {
  return (
    <RNWebView
      {...props}
      androidHardwareAccelerationDisabled={true}
    />
  );
}

export default WebView;