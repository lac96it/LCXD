import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { shakeCountAction } from '../../_redux/shakeCountSlice';

import BottomModal from '../../_uikits/BottomModal';
import Input from '../../_uikits/Input';
import Divider from '../../_uikits/Divider';
import { Text, View } from 'react-native';
import BtnSubmit from '../../_uikits/Button/BtnSubmit';
import CurrencyInput from '../../_uikits/CurrencyInput';

import styles from '../../_uikits/CommonStyles';
import BtnCheckbox from '../../_uikits/Button/BtnCheckbox';

function ModalEditSetting(props, ref) {

  const name = useSelector(state => state.shakeCount.name);
  const step_count = useSelector(state => state.shakeCount.step_count);
  const isUseShakeReaction = useSelector(state => state.shakeCount.isUseShakeReaction);
  const count = useSelector(state => state.shakeCount.count);

  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    step_count: 1,
    isUseShakeReaction: false,
    count: 0
  });

  const dispatch = useDispatch();

  const toggleModal = () => {
    setVisible(!visible);
  }

  useImperativeHandle(ref, () => ({
    open: () => {
      toggleModal();

      setFormData({
        name, step_count, isUseShakeReaction, count
      });
    }
  }));

  const setFieldValue = (property) => {
    setFormData({
      ...formData,
      ...property
    });
  }

  const onSubmit = () => {
    dispatch(shakeCountAction.setSetting(formData));

    toggleModal();
  }

  return (
    <BottomModal
      visible={visible}
      onHide={toggleModal}
    >
      <View style={[
        styles.py_sm
      ]}>
        <View>
          <Input
            prefix={<Text style={[
              styles.text_white,
              styles.fontWeight_bold
            ]}>_SLUG</Text>}
            placeholder="Tên gợi nhớ"
            value={formData.name}
            onChangeText={(v) => setFieldValue({ name: v })}
          />
        </View>

        <View style={[
          styles.mt_sm
        ]}>
          <CurrencyInput
            prefix={<Text style={[
              styles.text_white,
              styles.fontWeight_bold
            ]}>_STEP COUNT</Text>}
            value={formData.step_count}
            onChangeValue={(v) => setFieldValue({ step_count: v })}
          />
        </View>

        <View style={[
          styles.mt_sm
        ]}>
          <CurrencyInput
            prefix={<Text style={[
              styles.text_white,
              styles.fontWeight_bold
            ]}>_CURRENT COUNT</Text>}
            value={formData.count}
            onChangeValue={(v) => setFieldValue({ count: v })}
          />
        </View>

        <View style={[
          styles.mt_sm,
          styles.flex_row,
          styles.justify_content_end
        ]}>
          <BtnCheckbox
            label={"Dùng shake"}
            checked={formData.isUseShakeReaction}
            onChange={() => setFieldValue({ isUseShakeReaction: !formData.isUseShakeReaction })}
          />
        </View>

        <Divider style={[styles.bg_primary, styles.my_sm]} />

        <View style={[
          styles.flex_row,
          styles.justify_content_end
        ]}>
          <BtnSubmit onPress={onSubmit} style={[styles.mw_150, styles.justify_content_center]} />
        </View>
      </View>
    </BottomModal>
  );
}

export default forwardRef(ModalEditSetting);