import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import formatNumber from '../helper/formatNumber';
import { shakeCountAction } from '../_redux/shakeCountSlice';
import useShakeEvent from '../hooks/useShakeEvent';
import _ from 'lodash';
import useAlert from '../hooks/useAlert';

import { Dimensions, SafeAreaView, Text, View, Vibration, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import BtnSubmit from '../_uikits/Button/BtnSubmit';
import Icon from 'react-native-vector-icons/AntDesign';
import ModalEditSetting from '../components/ShakeCount/ModalEditSetting';
import Slider from '@react-native-community/slider';

import styles from '../_uikits/CommonStyles';

function ShakeCountScreen(props) {

  const count = useSelector(state => state.shakeCount.count);
  const name = useSelector(state => state.shakeCount.name);
  const isUseShakeReaction = useSelector(state => state.shakeCount.isUseShakeReaction);
  const step_count = useSelector(state => state.shakeCount.step_count);
  const lottieRef = useRef();
  const controlAnimateRef = useRef({ running: false });
  var myTimeout = useRef();
  const modalEditSettingRef = useRef();
  const { confirm } = useAlert();

  const dispatch = useDispatch();

  const runAnim = () => {
    if (!controlAnimateRef.current.running) {
      controlAnimateRef.current.running = true;
      lottieRef.current.resume();

      myTimeout.current = setTimeout(() => {
        lottieRef.current.pause();
        controlAnimateRef.current.running = false
      }, 3000);
    } else {

      clearTimeout(myTimeout.current);

      myTimeout.current = setTimeout(() => {
        lottieRef.current.pause();
        controlAnimateRef.current.running = false
      }, 3000);
    }
  }

  const onPlus = () => {
    dispatch(shakeCountAction.plus());
    Vibration.vibrate(100, false);
    runAnim();
  }

  const onMinus = () => {
    dispatch(shakeCountAction.minus());
    Vibration.vibrate(100, false);
    runAnim();
  }

  useShakeEvent({
    onShake: onPlus,
    disable: !isUseShakeReaction
  });

  const onChangeStepCount = (v) => {
    dispatch(shakeCountAction.setSetting({
      step_count: v
    }));
  }

  const onEditSetting = () => {
    modalEditSettingRef.current.open();
  }

  const onSave = () => {
    confirm({
      title: 'Lưu bản đếm hiện tại',
      description: 'Dữ liệu bản đếm hiện tại sẽ được chuyển vào lịch sử đếm. Có thể xem lại khi cần thiết. Lịch sử đếm chỉ ghi nhớ 10 lần đếm gần nhất.',
      onCancel: () => null,
      onOk: () => dispatch(shakeCountAction.onSaveHistory())
    });
  }

  return (
    <SafeAreaView style={[
      styles.flex_1
    ]}>
      <TouchableOpacity
        style={[
          {
            height: Dimensions.get('screen').height * 0.55
          },
          styles.bg_primary,
        ]}
        onPress={onPlus}
      >
        <View style={[
          {
            marginTop: 70
          }
        ]}>
          <Text style={[
            styles.fontSize_lg,
            styles.text_uppercase,
            styles.text_center,
            styles.text_white,
            styles.fontWeight_bold
          ]}>shake count</Text>
        </View>
        <View style={[
          {
            position: 'absolute',
            top: Dimensions.get('screen').height * 0.3 - 150,
            left: Dimensions.get('screen').width * 0.5 - 150,
            backgroundColor: 'rgba(255,255,255,0.7)',
            width: 300,
            height: 300,
            borderRadius: 150
          }
        ]}>
          <LottieView
            source={require('../lotties-json/shake-count-bg.json')}
            style={[
              {
                width: 300,
                height: 300
              }
            ]}
            ref={lottieRef}
            duration={900}
            loop
          />
        </View>

        <View style={[
          {
            width: 200,
            height: 200,
            position: 'absolute',
            top: Dimensions.get('screen').height * 0.3 - 100,
            left: Dimensions.get('screen').width * 0.5 - 100,
            backgroundColor: 'rgba(0,0,0,.5)',
            borderRadius: 100
          },
          styles.align_items_center,
          styles.justify_content_center
        ]}>
          <Text style={[
            styles.text_white,
            styles.fontWeight_bold,
            {
              fontSize: 50
            }
          ]}>{formatNumber(count)}</Text>
        </View>
      </TouchableOpacity>

      <View style={[
        styles.flex_grow_1,
        styles.p_sm
      ]}>

        <View>
          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={1}
            maximumValue={30}
            onValueChange={onChangeStepCount}
            step={1}
            value={Number(step_count)}
          />
        </View>

        {/* SETTINGS ROW */}
        <View style={[
          styles.mt_sm,
          styles.bg_secondary_2,
          styles.flex_row
        ]}>
          <View style={[
            styles.p_sm,
            styles.flex_grow_1,
            styles.flex_shrink_1
          ]}>
            <View style={[
              styles.flex_row,
              styles.align_items_center
            ]}>
              <Text style={[
                styles.fontSize_md
              ]}>SLUG:</Text>
              <Text style={[
                styles.fontSize_md_1,
                styles.ml_sm,
                styles.text_blue
              ]} numberOfLines={1}>{name || '---'}</Text>
            </View>

            <View style={[
              styles.flex_row,
              styles.align_items_center
            ]}>
              <Text style={[
                styles.fontSize_md
              ]}>STEP COUNT:</Text>
              <Text style={[
                styles.fontSize_md_1,
                styles.ml_sm,
                styles.text_blue
              ]} numberOfLines={1}>{step_count || 1}</Text>
            </View>

            <View style={[
              styles.flex_row,
              styles.align_items_center
            ]}>
              <Text style={[
                styles.fontSize_md
              ]}>USE SHAKE EVENT:</Text>

              {isUseShakeReaction ? (
                <Icon name="check" size={30} style={[styles.text_success, styles.ml_sm]} />
              ) : (
                <Icon name="close" size={30} style={[styles.text_red_6, styles.ml_sm]} />
              )}
            </View>
          </View>

          <View style={[
            styles.align_items_center,
            styles.justify_content_center,
            styles.mr_sm
          ]}>
            <TouchableOpacity
              style={[
                {
                  backgroundColor: 'rgba(0,0,0,.4)',
                  borderRadius: 30
                },
                styles.align_items_center,
                styles.justify_content_center,
                styles.p_sm
              ]}
              onPress={onEditSetting}
            >
              <Icon name="setting" size={30} style={[styles.text_white]} />
            </TouchableOpacity>
          </View>
        </View>

        {/* BTN SUBMIT */}
        <View style={[
          styles.flex_row,
          styles.justify_content_end,
          styles.mt_sm
        ]}>
          <BtnSubmit onPress={onSave} />
        </View>
      </View>

      <ModalEditSetting ref={modalEditSettingRef} />
    </SafeAreaView>
  );
}

export default ShakeCountScreen;