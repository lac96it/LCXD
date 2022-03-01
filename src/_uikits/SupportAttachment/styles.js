import { StyleSheet } from "react-native";
import theme from '../../configs/theme';

export const SupportAttachmentStyles = StyleSheet.create({
  container: {
    marginTop: 10
  },

  img: {
    height: 200,
    width: '100%',
  },

  imgBg: {
    width: '100%',
    height: 200,
    backgroundColor: theme.background.grey4
  },

  video: {
    height: 200,
  },

  undefinedFile: {
    flexDirection: 'row',
    backgroundColor: theme.background.grey4,
    padding: 10,
  },

  fileName: {
    fontWeight: '500',
    flex: 0,
    flexGrow: 1,
    flexBasis: 1
  }
});