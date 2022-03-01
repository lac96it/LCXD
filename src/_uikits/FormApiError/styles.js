import { StyleSheet } from 'react-native';
import theme from '../../configs/theme';

export const FormApiErrorStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.red2,
    borderWidth: 2,
    borderColor: theme.border.red3,
    padding: 10,
    borderRadius: 3
  },

  message: {
    color: theme.text.red6
  }
});