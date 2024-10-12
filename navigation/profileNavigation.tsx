import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Profile from '../screens/main/profile/profile';
import EditProfile from '../screens/main/profile/edit';
import ChangeUserPassword from '../screens/main/profile/change_password';

const ProfileStack = createNativeStackNavigator();
function ProfileNavigation(): React.JSX.Element {
    return (
      <ProfileStack.Navigator initialRouteName='Profile'>
        <ProfileStack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
        <ProfileStack.Screen name="Ubah Profil" component={EditProfile} options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#236152"
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 14,
            fontFamily: "PlusJakartaSans"
          }
        }} />
        <ProfileStack.Screen name="ChangeUserPassword" component={ChangeUserPassword} options={{headerShown: true}} />
      </ProfileStack.Navigator>
    );
}

export default ProfileNavigation;