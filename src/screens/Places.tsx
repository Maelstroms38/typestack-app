import React from 'react';
import { SafeAreaView, FlatList, Button } from 'react-native';
import { usePlacesQuery } from '../../graphql';
import { CardView } from '../components';

interface Props {}

const Places: React.FC<Props> = () => {
  const { data } = usePlacesQuery();
  return (
    <SafeAreaView>
      <FlatList
        ListFooterComponent={() => (
          <Button
            title="add new place"
            onPress={() => {
              console.log('create place');
            }}
          />
        )}
        data={data && data.places ? data.places : []}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => <CardView {...item} />}
      />
    </SafeAreaView>
  );
};
export default Places;
