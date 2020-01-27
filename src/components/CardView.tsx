import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const CardView = ({ title, description, imageUrl }) => (
  <Card>
    <Card.Title
      title={title}
      subtitle={description}
      left={props => (
        <Avatar.Icon
          {...props}
          style={{ backgroundColor: 'lightblue' }}
          color="#fff"
          size={42}
          icon="image"
        />
      )}
    />
    <Card.Cover source={{ uri: imageUrl || 'https://picsum.photos/700' }} />
  </Card>
);
export default CardView;
