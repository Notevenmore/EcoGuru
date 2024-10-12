import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import Login from '../screens/auth/login';
import Register from '../screens/auth/register';

const AuthStack = createNativeStackNavigator();
function Auth(): React.JSX.Element {
    return (
      <AuthStack.Navigator initialRouteName='Login'>
        <AuthStack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <AuthStack.Screen name="Register" component={Register} options={{headerShown: false}} />
      </AuthStack.Navigator>
    );
}

export default Auth;