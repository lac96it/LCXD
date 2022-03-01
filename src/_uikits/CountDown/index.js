import React, { useEffect, useRef, useState } from 'react';

import moment from 'moment';
import useTrans from '../../hooks/useTrans';

import { View, Text } from 'react-native';

import { CountDownStyles as styles } from './styles';

function CountDown({
  endTime,
  style,
  type = 'endTime'
}) {

  const [countDownTime, setCountDownTime] = useState({
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
    date: undefined
  });

  let intervalLoopRef = useRef();
  let countDownRef = useRef(endTime);
  const trans = useTrans();

  const formatNumberCountDown = (v) => {
    if (v < 10) return `0${v}`;

    return v;
  }

  useEffect(() => {
    intervalLoopRef.current = setInterval(() => {

      if (type === 'endTime') countDownByEndTime();
      if (type === 'countDownSeconds') countDownBySeconds();

    }, 1000);

    return () => {
      if (intervalLoopRef.current) {
        clearInterval(intervalLoopRef.current);
      }
    }
  }, []);

  const countDownByEndTime = () => {
    const time = Date.parse(endTime) - Date.parse(new Date());

    if (time >= 0) {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const date = Math.floor((time / (1000 * 60 * 60 * 24)));

      setCountDownTime({
        hours: formatNumberCountDown(hours),
        minutes: formatNumberCountDown(minutes),
        seconds: formatNumberCountDown(seconds),
        date: date
      })
    }
  }

  const countDownBySeconds = () => {
    const seconds = Math.floor((countDownRef.current) % 60);
    const minutes = Math.floor((countDownRef.current / 60) % 60);
    const hours = Math.floor((countDownRef.current / (60 * 60)) % 24);
    const date = Math.floor((countDownRef.current / (60 * 60 * 24)));

    setCountDownTime({
      hours: formatNumberCountDown(hours),
      minutes: formatNumberCountDown(minutes),
      seconds: formatNumberCountDown(seconds),
      date: date
    });

    countDownRef.current -= 1;
  }

  return (
    <View style={styles.container}>
      {!!countDownTime.date && (
        <Text style={style}>{countDownTime.date} {trans("common.short.date").toLowerCase()} </Text>
      )}
      <Text style={style}>{countDownTime.hours || '00'} : </Text>
      <Text style={style}>{countDownTime.minutes || '00'} : </Text>
      <Text style={style}>{countDownTime.seconds || '00'}</Text>
    </View>
  );
}

export default CountDown;