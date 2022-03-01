import { StyleSheet } from 'react-native';

export const CheckboxStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  checkbox: {
    width: 22,
    height: 22,
    alignSelf: 'center'
  },
  label: {
    fontSize: 16,
    alignSelf: 'center',
    marginLeft: 10,
    fontWeight: '500'
  },
  labelWrapper: {
    alignSelf: 'center'
  }
})