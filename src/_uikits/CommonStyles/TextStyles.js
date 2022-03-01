import { StyleSheet } from "react-native";
import theme from "../../configs/theme";

const TextStyles = StyleSheet.create({
  text_center: {
    textAlign: 'center'
  },

  text_right: {
    textAlign: 'right'
  },

  text_red_6: {
    color: theme.text.red6
  },

  text_black: {
    color: theme.text.black
  },

  text_primary: {
    color: theme.text.primary
  },

  text_secondary_4: {
    color: theme.text.grey4,
  },

  text_secondary: {
    color: theme.text.grey8,
  },

  text_secondary_6: {
    color: theme.text.grey6,
  },

  text_secondary_8: {
    color: theme.text.grey8,
  },

  text_blue: {
    color: theme.text.blue6
  },

  text_success: {
    color: theme.text.green6
  },

  text_warning: {
    color: theme.text.yellow6
  },

  text_white: {
    color: '#fff'
  },

  fontSize_md: {
    fontSize: 16
  },

  fontSize_md_1: {
    fontSize: 20
  },

  fontSize_lg: {
    fontSize: 24
  },

  fontSize_xl: {
    fontSize: 32
  },

  fontWeight_bold: {
    fontWeight: 'bold'
  },

  text_uppercase: {
    textTransform: 'uppercase'
  },

  text_capitalize: {
    textTransform: 'capitalize'
  },

  tall_fontWeightBold: {
    fontFamily: 'Oswald-Medium'
  },

  text_italic: {
    fontStyle: 'italic'
  }
});

export default TextStyles;