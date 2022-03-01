import { StyleSheet } from 'react-native';
import theme from '../../configs/theme';

export const ButtonStyles = StyleSheet.create({
  button: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingHorizontal: 15
  },
  text: {
    color: '#fff',
  }
});

export const SocialLoginStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.white,
    height: 45,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontWeight: 'bold',
    fontSize: 16
  }
});