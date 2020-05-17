import { useState } from 'react';
import { AsyncStorage } from 'react-native';
import { useCurrentUserQuery, useRefreshMutation } from '../../graphql';

export default () => {
  const [currentUser, setCurrentUser] = useState(null);

  const { refetch } = useCurrentUserQuery({
    fetchPolicy: 'network-only',
    onCompleted({ currentUser }) {
      setCurrentUser(currentUser);
    },
    async onError(error) {
      console.log(error.message);
      setCurrentUser(null);
    },
  });

  const [refreshMutation] = useRefreshMutation({
    onCompleted() {
      refetch();
    },
    onError(error) {
      console.log(error.message);
    },
  });

  // Fetch the token from storage then navigate to our appropriate place
  const getProfile = async () => {
    const userToken = await AsyncStorage.getItem('token');

    if (userToken) {
      refreshMutation({ variables: { token: userToken } });
    }
  };

  return { getProfile, currentUser };
};
