import React from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { CardView } from '../components';

interface Props {
  navigation;
}

const PlaceDetail: React.FC<Props> = props => {
  const route = useRoute();
  const { item } = route.params as any;

  return (
    <SafeAreaView>
      <CardView {...(item as any)} />
    </SafeAreaView>
  );
};

export default PlaceDetail;
