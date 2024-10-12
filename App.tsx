/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import 'react-native-gesture-handler';
import Auth from './navigation/authNavigation';
import Main from './navigation/mainNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {  AuthContextProvider, AuthContext } from './context/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <AuthContextProvider>
      <GestureHandlerRootView>
        <NavigationContainer>
          <AppContainer />
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContextProvider>
  );
}

function AppContainer() {
  const { isLogin } = useContext(AuthContext);
  return (
    <AppStack.Navigator initialRouteName="auth">
      {isLogin ? (
        <>
          <AppStack.Screen name="main" component={Main} options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <AppStack.Screen name="auth" component={Auth} options={{ headerShown: false }} />
        </>
      )}
    </AppStack.Navigator>
  );
}

export default App;
