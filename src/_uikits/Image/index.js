import React, { useEffect, useState } from 'react';

import _ from 'lodash';

import { Image as ReactImage } from 'react-native';
import FastImage from 'react-native-fast-image';

function Image({ cache, ...props }) {

  const [isLoadFailure, setIsLoadFailure] = useState(false);

  const handleError = () => {
    setIsLoadFailure(true);
  }

  useEffect(() => {
    return () => setIsLoadFailure(false);
  }, []);

  if (isLoadFailure || !props?.source) return <ReactImage {..._.omit(props, 'source')} source={require('../../../assets/picture.png')} />

  if (cache) return <FastImage {...props} onError={handleError} />

  return (
    <ReactImage {...props} onError={handleError} />
  );
}

export default Image;