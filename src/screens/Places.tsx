import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, Button } from 'react-native';
import { usePlacesQuery, NewPlaceAddedDocument } from '../../graphql';
import { CardView } from '../components';

interface Props {
  navigation;
}

const Places: React.FC<Props> = props => {
  const { data, subscribeToMore } = usePlacesQuery();
  const { navigation } = props;

  useEffect(() => {
    subscribeToMore({
      document: NewPlaceAddedDocument,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newPlace = (subscriptionData.data as any).newPlaceAdded;
        // add new place
        return Object.assign({}, prev, {
          places: [newPlace, ...prev.places]
        });
      }
    });
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data && data.places ? data.places : []}
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
export default Places;
