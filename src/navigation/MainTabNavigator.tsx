import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Books } from '../screens';
import { Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import { createCollapsibleStackSub } from 'react-navigation-collapsible';
import {
  BookDetail,
  AuthLoading,
  Login,
  ProfileBooks,
  ProfileReviews,
  Form,
  Schedule,
  ScanScreen,
  ReviewForm,
} from '../screens';
import { Header } from './Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const { width } = Dimensions.get('window');

export const Bookstack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Books"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      {createCollapsibleStackSub(
        <Stack.Screen name="Books" component={Books} />
      )}
      <Stack.Screen name="Detail" component={BookDetail} />
      <Stack.Screen
        name="Form"
        component={Form}
        options={{
          headerTitle: 'Create Book',
        }}
      />
      <Stack.Screen name="Review" component={ReviewForm} />
    </Stack.Navigator>
  );
};

export const ScanStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Schedule"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          headerTitle: 'Scan',
        }}
      />
      <Stack.Screen
        name="ScanForm"
        component={Form}
        options={{
          headerTitle: 'Create Book',
        }}
      />
    </Stack.Navigator>
  );
};

function ProfileTabNavigator() {
  const theme = useTheme();
  return (
    <TopTab.Navigator
      tabBarOptions={{
        lazy: true,
        scrollEnabled: true,
        tabStyle: {
          width: width / 2,
        },
        style: {
          fontSize: 24,
          fontWeight: '700',
          backgroundColor: theme.colors.background,
        },
        labelStyle: {
          color: theme.colors.text,
        },
        indicatorStyle: {
          backgroundColor: theme.colors.text,
        },
      }}
    >
      {createCollapsibleStackSub(
        <TopTab.Screen name="Bookshelf" component={ProfileBooks} />
      )}
      {createCollapsibleStackSub(
        <TopTab.Screen name="Reviews" component={ProfileReviews} />
      )}
    </TopTab.Navigator>
  );
}

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="Auth" component={AuthLoading} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={ProfileTabNavigator} />
      <Stack.Screen name="Review" component={ReviewForm} />
    </Stack.Navigator>
  );
};

export const MainTabNavigator = ({ navigation }) => {
  const theme = useTheme();
  // const [visible, setVisible] = useState(false);
  // const _onToggleSnackBar = () => setVisible(!visible);
  // const _onDismissSnackBar = () => setVisible(false);
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
            tabBarIcon: 'library-books',
          }}
        />
        <Tab.Screen
          name="Scan"
          component={ScanStack}
          options={{
            tabBarIcon: 'barcode-scan',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarIcon: 'account',
          }}
        />
      </Tab.Navigator>
      {/*<Portal>
        <Snackbar
          visible={visible}
          onDismiss={_onDismissSnackBar}
          style={{
            backgroundColor: theme.colors.background,
            position: 'absolute',
            bottom: 60,
          }}
          action={{
            label: 'OK',
            onPress: () => {
              _onToggleSnackBar();
            },
          }}
        >
          Welcome
        </Snackbar>
        </Portal>*/}
    </React.Fragment>
  );
};
