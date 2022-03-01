import { StyleSheet } from "react-native";
import theme from "../../configs/theme";

const BackgroundStyles = StyleSheet.create({
  bg_white: {
    backgroundColor: theme.background.white
  },

  bg_black: {
    backgroundColor: theme.background.black
  },

  bg_primary: {
    backgroundColor: theme.background.primary
  },

  bg_danger: {
    backgroundColor: theme.background.red6
  },

  bg_success: {
    backgroundColor: theme.background.green6
  },

  bg_shadow: {
    backgroundColor: `rgba(0,0,0, .3)`
  },

  bg_light_shadow: {
    backgroundColor: `rgba(255,255,255, .7)`
  },

  bg_lighter_shadow: {
    backgroundColor: `rgba(255,255,255, .9)`
  },

  bg_blue: {
    backgroundColor: theme.background.blue6
  },

  bg_secondary: {
    backgroundColor: theme.background.grey6
  },

  bg_secondary_4: {
    backgroundColor: theme.background.grey4
  },

  bg_secondary_3: {
    backgroundColor: theme.background.grey3
  },

  bg_secondary_2: {
    backgroundColor: theme.background.grey2
  },

  bg_transparent: {
    backgroundColor: 'rgba(0,0,0,0)'
  }
});

export default BackgroundStyles;