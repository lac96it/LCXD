import { StyleSheet } from 'react-native';
import theme from '../../configs/theme';

export const BottomModalStyle = StyleSheet.create({

  floatMask: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.1)'
  },

  transferMask: {
    flexGrow: 1,
  },

  whiteMask: {
    backgroundColor: theme.background.white,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: theme.border.black,
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowOpacity: 1,
    shadowRadius: 16.00,

    elevation: 24,
    minHeight: 200,
    marginTop: 'auto'
  },
})