import { StyleSheet } from "react-native";
import theme from "../../configs/theme";

const UIKitStyles = StyleSheet.create({
  containerShadow: {
    shadowColor: theme.border.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.00,
    elevation: 12,
  },

  card: {
    margin: 10,
    backgroundColor: theme.background.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: theme.border.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,
    elevation: 2,
  },

  badge: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Oswald-Medium',
    backgroundColor: theme.background.red6,
    minWidth: 25,
    textAlign: 'center',
    borderRadius: 20
  },
});

export default UIKitStyles;