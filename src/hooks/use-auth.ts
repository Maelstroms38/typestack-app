import { useState } from 'react';
import { AsyncStorage } from 'react-native';
import { useCurrentUserQuery, useRefreshMutation } from '../../graphql';

export default () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [expiry, setExpiry] = useState(null);

  const { refetch } = useCurrentUserQuery({
    fetchPolicy: 'cache-and-network',
    onCompleted({ currentUser }) {
      setCurrentUser(currentUser);
    },
    async onError(error) {
      console.log(error);
      setCurrentUser(null);
    },
  });

  const [refreshMutation] = useRefreshMutation({
    async onCompleted({ refreshToken }) {
      if (refreshToken && refreshToken.token && refreshToken.token.length > 0) {
        await AsyncStorage.setItem('token', refreshToken.token);
        setExpiry(refreshToken.refreshExpiresIn);
        refetch();
      }
    },
    onError(error) {
      console.log(error);
      setCurrentUser(null);
    },
  });

  // Fetch the token from storage then navigate to our appropriate place
  const getProfile = async () => {
    const userToken = await AsyncStorage.getItem('token');
    console.log(userToken, 'userToken');
    if (userToken && userToken.length > 0) {
      const timestamp = Math.floor(+new Date() / 1000);
      if (!expiry || timestamp > expiry) {
        refreshMutation({ variables: { token: userToken } });
      } else {
        refetch();
      }
    } else {
      setCurrentUser(null);
    }
  };

  return { getProfile, currentUser };
};
