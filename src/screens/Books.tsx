import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, Button } from 'react-native';
import { useBooksQuery } from '../../graphql';
import { CardView } from '../components';

interface Props {
  navigation;
}

const Books: React.FC<Props> = props => {
  const { data } = useBooksQuery();
  const { navigation } = props;

  return (
    <SafeAreaView>
      <FlatList
        data={data && data.books ? data.books : []}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <CardView
            {...(item as any)}
            onPress={() => navigation.navigate('Detail', { item })}
          />
        )}
      />
    </SafeAreaView>
  );
};
export default Books;
