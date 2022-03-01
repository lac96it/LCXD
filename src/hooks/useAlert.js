import { Alert } from 'react-native';

export default function useAlert() {
  const confirm = ({
    title,
    description,
    onCancel,
    onOk
  }) => {

    let actions = [];

    if (!!onCancel) actions.push({ text: 'Cancel', onPress: onCancel })
    if (!!onOk) actions.push({ text: 'OK', onPress: onOk })

    Alert.alert(title, description, actions);
  }

  return {
    confirm
  }
}