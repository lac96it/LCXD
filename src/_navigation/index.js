import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import HomeScreen from '../screens/Home';
import ShakeCountScreen from '../screens/ShakeCount';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <>
      <NavigationContainer theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#fff'
        }
      }}>
        <Stack.Navigator
          initialRouteName={"Home"}
          screenOptions={{
            cardStyle: {
              backgroundColor: "#fff",
            }
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />

          <Stack.Screen
            name="ShakeCount"
            component={ShakeCountScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Navigation;