import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  ScrollView,
  Alert
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useMutation } from '@apollo/react-hooks';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function LoginScreen(props) {
  const { navigation } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState(false);

  // Signing In
  //   const [signIn] = useMutation(SIGNIN_MUTATION, {
  //     async onCompleted({ signIn }) {
  //       const { token } = signIn;
  //       try {
  //         await AsyncStorage.setItem('token', token);
  //         navigation.replace('Profile');
  //       } catch (err) {
  //         console.log(err.message);
  //       }
  //     }
  //   });

  // Signing Up
  //   const [signUp, { data: signedUp }] = useMutation(SIGNUP_MUTATION, {
  //     async onCompleted({ signUp }) {
  //       const { token } = signUp;
  //       try {
  //         await AsyncStorage.setItem('token', token);
  //         navigation.replace('Profile');
  //       } catch (err) {
  //         console.log(err.message);
  //       }
  //     }
  //   });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {login ? null : (
        <TextInput
          onChangeText={text => setUsername(text)}
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
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder={login ? 'Email or Username' : 'Email'}
        label={login ? 'Email or Username' : 'Email'}
        mode="outlined"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
        label="Password"
        mode="outlined"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          labelStyle={{ color: '#fff' }}
          style={{ backgroundColor: 'rgba(75, 148, 214, 1)', marginTop: 20 }}
          onPress={() => {
            // TextInput validation
            let nullValues = [];
            if (!email) {
              nullValues.push('Email');
            }
            if (!username && !login) {
              nullValues.push('Username');
            }
            if (!password) {
              nullValues.push('Password');
            }
            if (nullValues.length) {
              Alert.alert(`Please fill in ${nullValues.join(', ')}`);
            } else {
              if (login) {
                // email validation
                const isEmail = email.includes('@');
                //   const res = isEmail
                //     ? signIn({ variables: { email, password } })
                //     : signIn({ variables: { username: email, password } });
              } else {
                // signUp({ variables: { email, username, password } });
              }
            }
          }}
        >
          {login ? 'Login' : 'Sign Up'}
        </Button>
        <Button
          labelStyle={{ color: 'rgba(75, 148, 214, 1)' }}
          style={{ backgroundColor: '#fff', marginTop: 20 }}
          onPress={() => {
            setLogin(!login);
          }}
          icon="information"
        >
          {login ? 'Need an account? Sign Up' : 'Have an account? Login'}
        </Button>
      </View>
    </ScrollView>
  );
}

LoginScreen.navigationOptions = {
  title: 'Welcome'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#fff'
  },
  input: {
    width: width - 40,
    height: 60,
    marginTop: 5
  },
  buttonContainer: {
    width: '100%'
  }
});
