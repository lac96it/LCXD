import React, { useMemo } from 'react';

import { View, Text } from 'react-native';

import { CharacterAvatarStyles as styles } from './styles';

const listColor = [
  '#e53935',// red
  '#d81b60',// pink
  '#8e24aa',// purple
  '#3949ab',// indigo
  '#1e88e5',// blue
  '#00acc1',// cyan
  '#7cb342',// lightGreen
  '#039be5',// lightBlue
  '#fb8c00',// orange
  '#00897b',// teal
  '#43a047',// green
  '#c0ca33',// lime
  '#fdd835',// yellow
  '#ffb300',// amber
  '#f4511e',// deepOrange
  '#6d4c41',// brown
  '#757575',// grey
  '#673ab7',// deepPurple
  '#546e7a'// blueGrey
]

function CharacterAvatar({
  text,
  style
}) {

  const firstLetter = useMemo(() => {
    return text.slice(0, 1);
  }, [text]);

  const getColorByChar = useMemo(() => {
    let fisrtCharCode = text.charCodeAt(0);

    return listColor[fisrtCharCode % listColor.length];
  }, [text]);

  return (
    <View style={[styles.container, { backgroundColor: getColorByChar }, style]}>
      <Text style={styles.text}>{firstLetter}</Text>
    </View>
  );
}

export default CharacterAvatar;