import React from 'react';
import { SafeAreaView, FlatList, Button } from 'react-native';
import {
  usePlacesQuery,
  useCreatePlaceMutation,
  createPlaceMutationOptions
} from '../../graphql';
import { CardView } from '../components';

interface Props {}

const Places: React.FC<Props> = () => {
  const { data } = usePlacesQuery();
  const [createPlace] = useCreatePlaceMutation();
  return (
    <SafeAreaView>
      <FlatList
        ListFooterComponent={() => (
          <Button
            title="Add New Place"
            onPress={() => {
              createPlace(
                createPlaceMutationOptions({
                  title: `New Place #${data.places && data.places.length + 1}`,
                  description: '',
                  imageUrl: ''
                }) as any
              );
            }}
          />
        )}
        data={data && data.places ? data.places : []}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => <CardView {...(item as any)} />}
      />
    </SafeAreaView>
  );
};
export default Places;
