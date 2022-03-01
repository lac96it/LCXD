import React from 'react';

import { signInGoogle } from '../../firebase-auth/methods';

import { TouchableOpacity } from 'react-native';

import styles from '../../uikits/CommonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

function GoogleSignin(props) {

  const onSigninGoogle = () => {
    signInGoogle();
  }

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
    ]} onPress={onSigninGoogle}>
      <Icon name="google" style={[
        styles.icon_size_lg,
        {
          color: '#DB4437'
        }
      ]} />
    </TouchableOpacity>
  );
}

export default GoogleSignin;