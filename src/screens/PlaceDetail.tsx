import React from 'react';
import { SafeAreaView } from 'react-native';
import { CardView } from '../components';

interface Props {
  navigation;
}

const PlaceDetail: React.FC<Props> = props => {
  const { navigation } = props;
  const { item } = navigation.state.params;
  return (
    <SafeAreaView>
      <CardView {...(item as any)} />
    </SafeAreaView>
  );
};

export default PlaceDetail;
