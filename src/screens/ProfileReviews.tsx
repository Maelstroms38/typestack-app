import React from 'react';
import { SafeAreaView, Animated } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import useAuth from '../hooks/use-auth';
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
  const { getProfile, currentUser } = useAuth();
  const {
    onScroll /* Event handler */,
    containerPaddingTop /* number */,
    scrollIndicatorInsetTop /* number */,
  } = useCollapsibleStack();
  return (
    <SafeAreaView>
      <Animated.FlatList
        refreshing={currentUser == null}
        onRefresh={() => getProfile()}
        numColumns={2}
        data={currentUser && currentUser.reviewSet ? currentUser.reviewSet : []}
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
          title={(currentUser && currentUser.username) || ''}
          subtitle={(currentUser && currentUser.email) || ''}
          left={(props) => <Avatar.Icon {...props} icon="account" />}
          style={{ backgroundColor: theme.colors.background }}
        />
      </CollapsibleStackSub>
    </SafeAreaView>
  );
};

export default ProfileReviews;
