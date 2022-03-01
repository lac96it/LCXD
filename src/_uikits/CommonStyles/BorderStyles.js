import { StyleSheet } from "react-native";
import theme from "../../configs/theme";

const BorderStyles = StyleSheet.create({
  border_1: {
    borderWidth: 1
  },

  border_2: {
    borderWidth: 2
  },

  border_bottom: {
    borderBottomWidth: 1
  },

  border_left: {
    borderLeftWidth: 1
  },

  border_right: {
    borderRightWidth: 1
  },

  border_top: {
    borderTopWidth: 1
  },

  border_primary: {
    borderColor: theme.border.primary
  },

  border_red_6: {
    borderColor: theme.border.red6
  },

  border_secondary: {
    borderColor: theme.border.grey4
  },

  border_blue: {
    borderColor: theme.border.blue6
  },

  border_dashed: {
    borderStyle: 'dashed',
    borderRadius: 1
  }
});

export default BorderStyles;