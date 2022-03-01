import { useEffect } from 'react';
import _ from 'lodash';
import RNShake from 'react-native-shake';

export default function useShakeEvent({
  onShake,
  debounce_timing = 500,
  disable = false
}) {
  useEffect(() => {
    const shakeSubscription = RNShake.addListener(_.throttle(() => {
      if (disable) return;

      onShake && onShake();
    }, debounce_timing, { trailing: false }))
    return () => {
      shakeSubscription.remove()
    }
  }, [disable, debounce_timing]);
}