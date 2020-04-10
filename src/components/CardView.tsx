import * as React from 'react';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const CardView = ({ title, summary, image, onPress, author }) => (
  <Card onPress={() => onPress && onPress()}>
    {!!author && (
      <Card.Title
        title={`${author.firstName} ${author.lastName}`}
        // subtitle={user.email}
        left={props => (
          <Avatar.Icon
            {...props}
            style={{ backgroundColor: 'lightblue' }}
            color="#fff"
            size={42}
            icon="library-books"
          />
        )}
      />
    )}
    <Card.Cover source={{ uri: image || 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{summary}</Paragraph>
    </Card.Content>
  </Card>
);
export default CardView;
