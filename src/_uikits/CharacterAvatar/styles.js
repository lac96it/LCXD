import { StyleSheet } from "react-native";
import theme from '../../configs/theme';

export const CharacterAvatarStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.blue6,
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23
  },

  text: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.text.white
  }
});