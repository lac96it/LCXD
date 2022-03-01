import React, { useRef, useState } from 'react';

import { View, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import TallText from '../Text/TallText';

import styles from '../../uikits/CommonStyles';

/**
 * 
 * @param {*} resources: [{id, label, Component}]
 * @returns 
 */
function Tabs({ resources = [], style }) {

  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [tabIndex, setTabIndex] = useState(0);
  const carouselRef = useRef();

  const onChangeTab = (idx) => {
    setTabIndex(idx);
    carouselRef.current.snapToItem(idx, true, true);
  }

  const onLayout = (e) => {
    setWidth(e?.nativeEvent?.layout?.width || Dimensions.get('window').width);
  }

  return (
    <View 
    style={[
      styles.flex_1,
      style
    ]}
    onLayout={onLayout}
    >
      <View
        style={[
          styles.containerShadow,
          styles.flex_row,
        ]}
      >
        {resources.map((i, idx) => (
          <TouchableOpacity
            key={`tab-label-${idx}`}
            style={[
              styles.flex_1,
              styles.bg_white,
              styles.flex_grow_1,
              styles.p_sm,
              tabIndex === idx && styles.bg_primary,
            ]}
            onPress={() => onChangeTab(idx)}
          >
            <TallText style={[
              styles.fontSize_md,
              styles.tall_fontWeightBold,
              tabIndex === idx ? styles.text_white : styles.text_secondary,
              styles.text_center
            ]}>{i.label}</TallText>
          </TouchableOpacity>
        ))}
      </View>

      <Carousel
        ref={carouselRef}
        data={resources}
        renderItem={({ item }) => (
          <item.Component />
        )}
        sliderWidth={width}
        onSnapToItem={idx => setTabIndex(idx)}
        itemWidth={width}
        layout="default"
      />
    </View>
  );
}

export default Tabs;