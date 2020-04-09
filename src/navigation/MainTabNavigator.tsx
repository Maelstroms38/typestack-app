import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Books } from '../screens';
import { useTheme, Portal, FAB } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import { BookDetail, AuthLoading, Login, Profile, Form } from '../screens';
import { Header } from './Header';

const Stack = createStackNavigator();

export const Bookstack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Books"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        )
      }}
    >
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen name="Detail" component={BookDetail} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        )
      }}
    >
      <Stack.Screen name="Auth" component={AuthLoading} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

export const MainTabNavigator = ({ navigation }) => {
  const isFocused = useIsFocused();
  const theme = useTheme();
  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Books"
        shifting={true}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name="Books"
          component={Bookstack}
          options={{
            tabBarIcon: 'home-account'
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarIcon: 'bell-outline'
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon="feather"
          onPress={() => navigation.navigate('Form', { item: {} })}
          style={{
            backgroundColor: theme.colors.background,
            position: 'absolute',
            bottom: 100,
            right: 16
          }}
        />
      </Portal>
    </React.Fragment>
  );
};
