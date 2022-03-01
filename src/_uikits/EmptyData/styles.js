import { StyleSheet } from 'react-native';
import theme from '../../configs/theme';

export const EmptyDataStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },

  text: {
    fontWeight: '500',
    color: theme.text.grey6
  }
});