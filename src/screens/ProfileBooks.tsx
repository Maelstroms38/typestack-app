import React from 'react';
import { SafeAreaView, Animated } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import { CardView } from '../components';
import {
  useCollapsibleStack,
  CollapsibleStackSub,
} from 'react-navigation-collapsible';
import { useTheme } from 'react-native-paper';
import useAuth from '../hooks/use-auth';

interface Props {
  navigation;
}

const ProfileBooks: React.FC<Props> = (props) => {
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
        data={currentUser && currentUser.owner ? currentUser.owner : []}
        onScroll={onScroll}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => {
          return (
            <CardView
              {...(item.book as any)}
              onPress={() =>
                navigation.navigate('Detail', {
                  item: item.book,
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

export default ProfileBooks;
