import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { isImage } from '../../helper/checkFileExtension';
import { REACT_APP_API_URL_NOTIFICATION } from '@env';
import theme from '../../configs/theme';
import _ from 'lodash';
import { modalAction } from '../../redux/modal';
import useTrans from '../../hooks/useTrans';

import {
  View, Text, Image, ImageBackground,
  TouchableOpacity, Linking, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { SupportAttachmentStyles as styles } from './styles';

function SupportAttachment({ attachment }) {

  const dispatch = useDispatch();
  const trans = useTrans();

  const getFileNameFromAttachment = useMemo(() => {
    return _.last(attachment.split('/'));
  }, [attachment]);

  const downloadFile = async () => {
    let url = `${REACT_APP_API_URL_NOTIFICATION}/files/${attachment}`;

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      dispatch(modalAction.showError(trans('common.cant_open_file')))
    }
  }

  if (isImage(attachment)) return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="center"
        source={require('../../../assets/hourglass.png')}
        style={styles.imgBg}
      >
        <Image
          source={{ uri: `${REACT_APP_API_URL_NOTIFICATION}/files/${attachment}` }}
          style={styles.img}
        />
      </ImageBackground>
    </View>
  )

  // if (isVideo(attachment)) return (
  //   <View style={styles.container}>
  //     <ImageBackground
  //       resizeMode="center"
  //       source={require('../../../assets/hourglass.png')}
  //       style={styles.imgBg}
  //     >
  //       <Video
  //         source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  //         // source={{ uri: `${REACT_APP_API_URL_NOTIFICATION}/files/${attachment}` }}
  //         onError={videoError}
  //         style={styles.video}
  //         ref={videoRef}
  //         fullscreen
  //       />
  //     </ImageBackground>
  //   </View>
  // )

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={downloadFile} style={styles.undefinedFile}>
        <Icon name="file1" size={72} color={theme.text.blue5} />
        <Text style={styles.fileName} numberOfLines={1} ellipsizeMode='head'>{getFileNameFromAttachment}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SupportAttachment;