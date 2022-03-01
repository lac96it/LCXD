import { StyleSheet } from "react-native";
import theme from '../../configs/theme';

export const CurrencyInputStyles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: 18,
    padding: 15,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 12,
    backgroundColor: '#fff'
  },
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

  suffixWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.background.grey5,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 12,
    borderBottomEndRadius: 12
  },

  suffixText: {
    fontSize: 20,
    fontWeight: '500',
    color: theme.text.grey8
  }
})