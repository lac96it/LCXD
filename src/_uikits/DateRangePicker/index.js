import React, { useEffect, useState } from 'react';

import useTrans from '../../hooks/useTrans';
import moment from 'moment';

import { View, TouchableOpacity, Text } from 'react-native';
import RNDatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/EvilIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import styles from '../CommonStyles';

function DateRangePicker({ onChange, value, inputFormat = 'YYYY-MM-DD', outputFormat = 'YYYY-MM-DD', ...props }) {

  const [date, setDate] = useState({
    startDate: null,
    endDate: null
  });
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState('startDate'); // startDate | endDate
  const trans = useTrans();

  useEffect(() => {
    let { startDate, endDate } = value;

    if (date instanceof Date) {
      setDate({ startDate, endDate })
    } else if (typeof startDate === 'string') {
      startDate = moment(startDate, inputFormat).isValid() ? moment(startDate, inputFormat).toDate() : null;
      endDate = moment(endDate, inputFormat).isValid() ? moment(endDate, inputFormat).toDate() : null;

      setDate({ startDate, endDate })
    }
  }, []);

  const toggleModal = (d) => {

    if (d === 'endDate' && !date.startDate) return;

    setOpen(!open);
    setActiveKey(d);
  }

  const onChangeDate = (propertyDate) => {
    setDate({
      ...date,
      [activeKey]: propertyDate
    });

    let { startDate, endDate } = {
      ...date,
      [activeKey]: propertyDate
    };

    if (startDate instanceof Date) startDate = moment(startDate).format(outputFormat);
    if (endDate instanceof Date) endDate = moment(endDate).format(outputFormat);

    onChange && onChange({ startDate, endDate });
  }

  return (
    <View>
      <View style={[
        styles.flex_row,
        // styles.flex_nowrap,
        styles.flex_wrap
      ]}>
        <TouchableOpacity
          style={[
            styles.p_sm,
            {
              minWidth: 170,
              height: 50,
              borderRadius: 25,
              margin: 3,
              marginLeft: 0
            },
            !!date.startDate ? styles.bg_primary : styles.bg_secondary_3,
            styles.flex_row,
            styles.align_items_center
          ]}
          onPress={() => toggleModal('startDate')}
        >
          <Icon name="calendar" size={25} style={[
            !!date.startDate ? styles.text_white : styles.text_secondary,
            styles.mr_sm
          ]} />
          <Text style={[
            !!date.startDate ? styles.text_white : styles.text_secondary,
          ]}>{!!date.startDate ? moment(date.startDate).format("DD-MM-YYYY") : trans("common.start_date")}</Text>
        </TouchableOpacity>

        <View style={[
          styles.align_items_center,
          styles.justify_content_center,
          styles.mx_sm
        ]}>
          <AntIcon name="arrowright" size={25} style={[styles.text_primary]} />
        </View>

        <TouchableOpacity
          style={[
            styles.p_sm,
            {
              minWidth: 170,
              height: 50,
              borderRadius: 25,
              margin: 3,
              marginRight: 0
            },
            !!date.endDate ? styles.bg_primary : styles.bg_secondary_3,
            styles.flex_row,
            styles.align_items_center
          ]}
          onPress={() => toggleModal('endDate')}
        >
          <Icon name="calendar" size={25} style={[
            !!date.endDate ? styles.text_white : styles.text_secondary,
            styles.mr_sm
          ]} />
          <Text style={[
            !!date.endDate ? styles.text_white : styles.text_secondary,
          ]}>{!!date.endDate ? moment(date.endDate).format("DD-MM-YYYY") : trans("common.end_date")}</Text>
        </TouchableOpacity>
      </View>

      <RNDatePicker
        modal
        mode="date"
        open={open}
        date={new Date()}
        onConfirm={(d) => {
          setOpen(false);
          onChangeDate(d);
        }}
        onCancel={() => {
          setOpen(false)
        }}
        minimumDate={!!(activeKey === 'endDate') ? moment(date.startDate).toDate() : undefined}
        {...props}
      />
    </View>
  );
}

export default DateRangePicker;