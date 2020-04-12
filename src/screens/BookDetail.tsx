import React from 'react';
import { useRoute, useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { CardView } from '../components';

interface Props {
  navigation;
}

const BookDetail: React.FC<Props> = (props) => {
  const route = useRoute();
  const theme = useTheme();
  const { item } = route.params as any;
  const { navigation } = props;

  return (
    <ScrollView keyboardDismissMode="interactive">
      <CardView {...(item as any)} />
      <Button
        mode="outlined"
        labelStyle={{ color: theme.colors.text }}
        style={{
          marginVertical: 5,
          backgroundColor: theme.colors.background,
        }}
        onPress={() => {
          navigation.navigate('Form', { item });
        }}
      >
        Edit Book
      </Button>
    </ScrollView>
  );
};

export default BookDetail;
