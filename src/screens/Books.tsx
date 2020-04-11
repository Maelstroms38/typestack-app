import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, RefreshControl } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useBooksQuery } from '../../graphql';
import { CardView } from '../components';

interface Props {
  navigation;
}

const Books: React.FC<Props> = (props) => {
  const { data, refetch, loading } = useBooksQuery();
  const { navigation } = props;
  const theme = useTheme();
  console.log(data, loading);
  return (
    <SafeAreaView>
      <FlatList
        refreshing={loading}
        onRefresh={() => refetch()}
        data={data && data.books ? data.books : []}
        keyExtractor={(item) => `${item.id}`}
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
