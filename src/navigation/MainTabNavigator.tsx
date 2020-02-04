import React from 'react';
import { Platform, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Places } from '../screens';
import { PlaceDetail, AuthLoading, Login } from '../screens';
import { TabBarIcon } from '../components';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});

const PlaceStack = createStackNavigator(
  {
    Places: Places,
    Detail: PlaceDetail
  },
  config as any
);

PlaceStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  )
};

const ProfileStack = createStackNavigator({
  Auth: AuthLoading,
  Login: Login
  // Profile:
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  )
};

const tabNavigator = createBottomTabNavigator({
  PlaceStack,
  ProfileStack
});

export default tabNavigator;
