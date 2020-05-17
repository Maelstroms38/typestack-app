import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import { useLoginMutation, useUserCreateMutation } from '../../graphql';
import { Button, TextInput, useTheme } from 'react-native-paper';
import useAlert from '../hooks/use-alert';

const { width } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { alert, setMessage } = useAlert({ message: '' });

  // Signing In
  const [loginMutation] = useLoginMutation({
    async onCompleted({ tokenAuth }) {
      const { token } = tokenAuth;
      if (token && token.length) {
        try {
          await AsyncStorage.setItem('token', token);
          navigation.replace('Profile');
        } catch (err) {
          setMessage(err.message);
        }
      }
    },
    async onError(error) {
      console.log(error);
      setMessage(error.message);
    },
  });

  // Signing Up
  const [createUserMutation] = useUserCreateMutation({
    async onCompleted({ userCreate }) {
      const { user } = userCreate;
      if (user) {
        try {
          loginMutation({
            variables: { username: user.username, password },
          });
        } catch (err) {
          setMessage(err.message);
        }
      }
    },
    async onError(error) {
      setMessage(error.message);
    },
  });

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      {login ? null : (
        <TextInput
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="Username"
          label="Username"
          mode="outlined"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
        />
      )}
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder={login ? 'Username' : 'Email'}
        label={login ? 'Username' : 'Email'}
        mode="outlined"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
        label="Password"
        mode="outlined"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        secureTextEntry={!showPassword}
      />
      <View style={styles.ButtonTextWrapper}>
        <Button
          icon={showPassword ? 'eye-off' : 'eye'}
          mode="outlined"
          style={{
            marginTop: 20,
            backgroundColor: theme.colors.background,
          }}
          labelStyle={{ color: theme.colors.text }}
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide Password' : 'Show Password'}
        </Button>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={{
            marginTop: 20,
          }}
          onPress={() => {
            if (login) {
              loginMutation({
                variables: { username: email, password },
              });
            } else {
              createUserMutation({ variables: { email, username, password } });
            }
          }}
        >
          {login ? 'Login' : 'Sign Up'}
        </Button>
        <Button
          mode="outlined"
          style={{ marginTop: 20 }}
          onPress={() => {
            setLogin(!login);
          }}
          icon="information"
        >
          {login ? 'Need an account? Sign Up' : 'Have an account? Login'}
        </Button>
      </View>
      {alert}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  input: {
    width: width - 40,
    height: 60,
    marginTop: 5,
  },
  buttonContainer: {
    width: '100%',
  },
  ButtonTextWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
});
