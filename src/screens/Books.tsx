import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, Button } from 'react-native';
// import { useBooksQuery, NewPlaceAddedDocument } from '../../graphql';
import { CardView } from '../components';

interface Props {
  navigation;
}

const Books: React.FC<Props> = props => {
  // const { data, subscribeToMore } = useBooksQuery();
  const { navigation } = props;

  useEffect(() => {
    // subscribeToMore({
    //   document: NewPlaceAddedDocument,
    //   updateQuery: (prev, { subscriptionData }) => {
    //     if (!subscriptionData.data) return prev;
    //     const newPlace = (subscriptionData.data as any).newPlaceAdded;
    //     // add new place
    //     return Object.assign({}, prev, {
    //       Books: [newPlace, ...prev.Books]
    //     });
    //   }
    // });
  }, []);

  return (
    <SafeAreaView>
      {/*<FlatList
        data={data && data.Books ? data.Books : []}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <CardView
            {...(item as any)}
            onPress={() => navigation.navigate('Detail', { item })}
          />
        )}
        />*/}
    </SafeAreaView>
  );
};
export default Books;
