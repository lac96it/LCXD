import React from 'react';
import Navigation from './src/_navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from './src/_redux';

// import useFirebaseMessaging from './src/hooks/useFirebaseMessaging';
// import usePushNotification from './src/hooks/usePushNotification';

/** START Setup font */
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';

AntIcon.loadFont();
FontAwesomeIcon.loadFont();
EvilIcons.loadFont();
EntypoIcons.loadFont();
/** END Setup font */

import 'moment/locale/ja.js';
import 'moment/locale/vi.js';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
