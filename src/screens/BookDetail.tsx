import React from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { CardView } from '../components';

interface Props {
  navigation;
}

const BookDetail: React.FC<Props> = props => {
  const route = useRoute();
  const { item } = route.params as any;
  const { navigation } = props;

  return (
    <SafeAreaView>
      <CardView {...(item as any)} />
      <Button
        style={{
          marginTop: 20
        }}
        onPress={() => {
          navigation.navigate('Form', { item });
        }}
      >
        Edit Book
      </Button>
    </SafeAreaView>
  );
};

export default BookDetail;
