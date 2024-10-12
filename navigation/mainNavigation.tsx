import React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';

import Home from '../screens/main/home';
import Report from '../screens/main/report';
import HomeSolid from "../assets/icons/home-solid.png";
import HomeNonSolid from "../assets/icons/home-non-solid.png";
import ProfileSolid from "../assets/icons/profile-solid.png";
import ProfileNonSolid from "../assets/icons/profile-non-solid.png";
import ReportSolid from "../assets/icons/report-solid.png";
import ReportNonSolid from "../assets/icons/report-non-solid.png";
import ProfileNavigation from './profileNavigation';

const Tab = createBottomTabNavigator();
function Main(): React.JSX.Element {
    return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({ focused }) => (
              focused 
                ? <Image source={HomeSolid} style={{ width: 24, height: 24 }} />  
                : <Image source={HomeNonSolid} style={{ width: 24, height: 24 }} />
            ),
            tabBarActiveTintColor: "#236152",
            tabBarInactiveTintColor: "#6D6D6D",
            tabBarLabelPosition: "below-icon",
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name="Report" 
          component={Report} 
          options={{
            tabBarIcon: ({ focused }) => (
              focused 
                ? <Image source={ReportSolid} style={{ width: 24, height: 24 }} />  
                : <Image source={ReportNonSolid} style={{ width: 24, height: 24 }} />
            ),
            tabBarActiveTintColor: "#236152",
            tabBarInactiveTintColor: "#6D6D6D",
            tabBarLabelPosition: "below-icon",
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="Profil" 
          component={ProfileNavigation} 
          options={{
            tabBarIcon: ({ focused }) => (
              focused 
                ? <Image source={ProfileSolid} style={{ width: 24, height: 24 }} />  
                : <Image source={ProfileNonSolid} style={{ width: 24, height: 24 }} />
            ),
            tabBarActiveTintColor: "#236152",
            tabBarInactiveTintColor: "#6D6D6D",
            tabBarLabelPosition: "below-icon",
            headerShown: false
          }}
        />
      </Tab.Navigator>
    );
}

export default Main;