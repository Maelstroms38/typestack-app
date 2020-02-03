import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient } from './graphql';
import { AppNavigator } from './src/navigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f'
  }
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <PaperProvider theme={theme}>
          <View style={styles.container}>
            <AppNavigator />
          </View>
        </PaperProvider>
      </ApolloProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingVertical: 40
  }
});
