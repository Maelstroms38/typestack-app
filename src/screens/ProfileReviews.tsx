import React from 'react';
import { View, SafeAreaView, Animated } from 'react-native';
import { Card, Avatar, ActivityIndicator } from 'react-native-paper';
import { useCurrentUserQuery } from '../../graphql';
import { Poster } from '../components';
import {
  useCollapsibleStack,
  CollapsibleStackSub,
} from 'react-navigation-collapsible';
import { useTheme } from 'react-native-paper';

interface Props {
  navigation;
}

const ProfileReviews: React.FC<Props> = (props) => {
  const theme = useTheme();
  const { navigation } = props;
  const { data, loading, refetch } = useCurrentUserQuery({
    fetchPolicy: 'cache-and-network',
  });
  const {
    onScroll /* Event handler */,
    containerPaddingTop /* number */,
    scrollIndicatorInsetTop /* number */,
  } = useCollapsibleStack();
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <SafeAreaView>
      <Animated.FlatList
        refreshing={loading}
        onRefresh={() => refetch()}
        numColumns={2}
        data={
          data && data.currentUser && data.currentUser.reviewSet
            ? data.currentUser.reviewSet
            : []
        }
        onScroll={onScroll}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => {
          return (
            <Poster
              {...(item as any)}
              onPress={() =>
                navigation.navigate('Review', {
                  item,
                })
              }
            />
          );
        }}
      />
      <CollapsibleStackSub>
        <Card.Title
          title={(data.currentUser && data.currentUser.username) || ''}
          subtitle={(data.currentUser && data.currentUser.email) || ''}
          left={(props) => <Avatar.Icon {...props} icon="account" />}
          style={{ backgroundColor: theme.colors.background }}
        />
      </CollapsibleStackSub>
    </SafeAreaView>
  );
};

export default ProfileReviews;
