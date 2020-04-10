import React from 'react';
import { View, FlatList } from 'react-native';
import {
  Card,
  Avatar,
  ActivityIndicator,
  IconButton
} from 'react-native-paper';
import { useCurrentUserQuery } from '../../graphql';
import { CardView } from '../components';

interface Props {
  navigation;
}

const Profile: React.FC<Props> = props => {
  const { navigation } = props;
  const { data, loading } = useCurrentUserQuery({
    fetchPolicy: 'network-only'
  });
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View>
      <Card>
        <Card.Title
          title={(data.currentUser && data.currentUser.username) || ''}
          subtitle={(data.currentUser && data.currentUser.email) || ''}
          left={props => <Avatar.Icon {...props} icon="account" />}
        />
      </Card>
      <FlatList
        data={
          data && data.currentUser && data.currentUser.reviewSet
            ? data.currentUser.reviewSet
            : []
        }
        keyExtractor={item => `${item.pubDate}`}
        renderItem={({ item }) => {
          return (
            <CardView
              {...(item as any)}
              onPress={() =>
                navigation.navigate('Detail', {
                  item: { ...item, user: data.currentUser }
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

export default Profile;
