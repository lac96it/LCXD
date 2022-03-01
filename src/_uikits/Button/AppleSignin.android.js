import React from 'react';
import { useDispatch } from 'react-redux';
import { modalAction } from '../../redux/modal';

import { signInAppleAndroid } from '../../firebase-auth/methods';

import { appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../uikits/CommonStyles';

function AppleSignin(props) {

  const dispatch = useDispatch();

  const onSigninApple = () => {
    signInAppleAndroid().catch(err => {
      dispatch(modalAction.showError('Apple Sign-In failed - no identify token returned'));
    });
  }

  if (!appleAuthAndroid.isSupported) return <></>;

  return (
    <TouchableOpacity style={[
      styles.containerShadow,
      styles.p_sm,
      styles.align_items_center,
      styles.justify_content_center,
      styles.bg_white,
      styles.mx_sm,
      {
        width: 60,
        height: 60,
        borderRadius: 35,
      }
    ]} onPress={onSigninApple}>
      <Icon name="apple" style={[
        styles.icon_size_lg,
        {
          color: '#000'
        }
      ]} />
    </TouchableOpacity>
  );
}

export default AppleSignin;