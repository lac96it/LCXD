import { StyleSheet } from 'react-native';
import theme from '../../configs/theme';

export const SelectStyles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: theme.text.primary,
    fontWeight: '500'
  },
  required: {
    color: theme.text.red6
  },
  errorMessage: {
    color: theme.text.red6,
    marginTop: 5
  },
  wrapperSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: theme.background.grey3,
    borderRadius: 12
  },

  selectedText: {
    fontSize: 18, 
    fontWeight: '500'
  },

  option: {
    borderRadius: 5,
    marginVertical: 10
  },

  modalContainer: {
    marginBottom: 40
  }
});