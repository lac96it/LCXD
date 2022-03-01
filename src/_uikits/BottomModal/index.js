import React from 'react';

import { Modal, TouchableOpacity, View } from 'react-native';
import KBAView from '../KBAView';

import { BottomModalStyle } from './styles';

function BottomModal({ visible, onHide, hideable = true, children, maskItem, style = {} }) {

  const hide = () => {
    if (hideable) onHide && onHide();
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onHide}
    >
      <KBAView
        style={BottomModalStyle.floatMask}
      >
        <TouchableOpacity onPress={hide} style={BottomModalStyle.transferMask}>
          {maskItem}
        </TouchableOpacity>
        <View style={[BottomModalStyle.whiteMask, style]}>
          {children}
        </View>
      </KBAView>
    </Modal>
  );
}

export default BottomModal;