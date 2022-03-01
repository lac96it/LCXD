import React from 'react';

import { signInFacebook } from '../../firebase-auth/methods';

import { TouchableOpacity } from 'react-native';

import styles from '../../uikits/CommonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

function FacebookSignin(props) {

  const onSigninFacebook = () => {
    signInFacebook();
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
    ]} onPress={onSigninFacebook}>
      <Icon name="facebook" style={[
        styles.icon_size_lg,
        {
          color: '#4267B2'
        }
      ]} />
    </TouchableOpacity>
  );
}

export default FacebookSignin;