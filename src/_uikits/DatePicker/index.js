import React, { useState } from 'react';

import useTrans from '../../hooks/useTrans';
import moment from 'moment';

import { View, TouchableOpacity, Text } from 'react-native';
import RNDatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/EvilIcons';

import styles from '../CommonStyles';

function DatePicker(props) {

  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  }

  const trans = useTrans();

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.p_sm,
          {
            minWidth: 170,
            height: 50,
            borderRadius: 25
          },
          !!date ? styles.bg_primary : styles.bg_secondary_3,
          styles.flex_row,
          styles.align_items_center
        ]}
        onPress={toggleModal}
      >
        <Icon name="calendar" size={25} style={[
          !!date ? styles.text_white : styles.text_secondary,
          styles.mr_sm
        ]} />
        <Text style={[
          !!date ? styles.text_white : styles.text_secondary,
        ]}>{!!date ? moment(date).format("DD-MM-YYYY") : trans("common.date_picker")}</Text>
      </TouchableOpacity>

      <RNDatePicker
        modal
        mode="date"
        open={open}
        date={date || new Date()}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        {...props}
      />
    </View>
  );
}

export default DatePicker;