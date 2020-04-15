import React from 'react';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { CardView } from '../components';
import {
  useCreateBookInstanceMutation,
  useDeleteBookInstanceMutation,
  useCurrentUserQuery,
} from '../../graphql';

interface Props {
  route;
  navigation;
}

const BookDetail: React.FC<Props> = ({ route, navigation }) => {
  const theme = useTheme();
  const { item } = route.params as any;
  const [createBookInstance] = useCreateBookInstanceMutation({
    async onCompleted() {
      refetch();
    },
  });
  const [deleteBookInstance] = useDeleteBookInstanceMutation({
    async onCompleted() {
      refetch();
    },
  });

  const { data, loading, refetch } = useCurrentUserQuery({
    fetchPolicy: 'cache-and-network',
  });

  const saved =
    data &&
    data.currentUser &&
    data.currentUser.owner.find((instance) => instance.book.id == item.id);

  const review =
    data &&
    data.currentUser &&
    data.currentUser.reviewSet.find((review) => review.book.id == item.id);

  return (
    <ScrollView keyboardDismissMode="interactive">
      <CardView {...(item as any)} />
      <Button
        loading={loading}
        mode="outlined"
        labelStyle={{ color: theme.colors.text }}
        style={{
          margin: 15,
          backgroundColor: theme.colors.background,
        }}
        onPress={() => {
          saved
            ? deleteBookInstance({
                variables: {
                  id: saved.id,
                },
              })
            : createBookInstance({
                variables: {
                  book: item.id,
                  imprint: new Date().toString(),
                  status: 'a',
                },
              });
        }}
      >
        {saved ? 'Remove from Bookshelf' : 'Save to Bookshelf'}
      </Button>
      <Button
        loading={loading}
        mode="outlined"
        labelStyle={{ color: theme.colors.text }}
        style={{
          margin: 15,
          backgroundColor: theme.colors.background,
        }}
        onPress={() => {
          review
            ? navigation.navigate('Review', {
                item: review,
              })
            : navigation.navigate('Review', {
                item: { book: item },
              });
        }}
      >
        {review ? 'Edit Review' : 'Add Review'}
      </Button>
    </ScrollView>
  );
};

export default BookDetail;
