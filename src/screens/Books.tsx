import React, { useState } from 'react';
import { SafeAreaView, View, Animated, Dimensions } from 'react-native';
import { useTheme, Searchbar, ActivityIndicator } from 'react-native-paper';
import { useBooksQuery } from '../../graphql';
import { CardView } from '../components';
import {
  useCollapsibleStack,
  CollapsibleStackSub,
} from 'react-navigation-collapsible';

interface Props {
  navigation;
}

const { height } = Dimensions.get('window');

const Books: React.FC<Props> = ({ navigation }) => {
  const { data, refetch, loading } = useBooksQuery();
  const theme = useTheme();
  const {
    onScroll /* Event handler */,
    containerPaddingTop /* number */,
    scrollIndicatorInsetTop /* number */,
  } = useCollapsibleStack();
  const [searchQuery, setQuery] = useState('');
  return (
    <SafeAreaView>
      <Animated.FlatList
        refreshing={!!loading}
        refreshControl={
          <ActivityIndicator
            animating={!!loading}
            color={theme.colors.primary}
          />
        }
        onRefresh={() => refetch()}
        data={data && data.books ? data.books : []}
        keyExtractor={(item) => `${item.id}`}
        onScroll={onScroll}
        contentContainerStyle={{
          paddingTop: containerPaddingTop,
        }}
        scrollIndicatorInsets={{
          top: scrollIndicatorInsetTop,
        }}
        renderItem={({ item }) => (
          <CardView
            {...(item as any)}
            onPress={() => navigation.navigate('Detail', { item })}
          />
        )}
      />
      {!loading && (
        <CollapsibleStackSub>
          <View style={{ padding: 5, width: '100%' }}>
            <Searchbar
              style={{ backgroundColor: theme.colors.background }}
              placeholder="Search"
              onChangeText={(text) => setQuery(text)}
              onSubmitEditing={() => refetch({ search: searchQuery })}
              onBlur={() => console.log('blurred')}
              value={searchQuery}
            />
          </View>
        </CollapsibleStackSub>
      )}
    </SafeAreaView>
  );
};
export default Books;
