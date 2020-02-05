import React, { useEffect } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';

export default function AuthLoadingScreen(props) {
  useEffect(() => {
    bootstrapAsync();
  });

  // Fetch the token from storage then navigate to our appropriate place
  const bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('token');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // props.navigation.replace(userToken ? 'Profile' : 'Login');
  };

  // Render any loading content that you like here
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}
