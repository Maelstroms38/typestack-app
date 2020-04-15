import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {
  useCurrentUserQuery,
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} from '../../graphql';
import {
  Button,
  IconButton,
  TextInput,
  useTheme,
  List,
  Card,
} from 'react-native-paper';

const { width } = Dimensions.get('window');

export default function ReviewForm(props) {
  const theme = useTheme();
  const route = useRoute();
  const { navigation } = props;
  const { item } = (route.params as any) || { book: {} };
  const [comment, setComment] = useState(item.comment || '');
  const {
    id,
    book: { id: bookId, title },
  } = item;
  const [value, setValue] = useState(item.value || 3);
  const { refetch } = useCurrentUserQuery({ fetchPolicy: 'cache-and-network' });

  // Create Book
  const [createReviewMutation] = useCreateReviewMutation({
    async onCompleted() {
      refetch();
      navigation.goBack();
    },
  });

  // Update Review
  const [updateReviewMutation] = useUpdateReviewMutation({
    async onCompleted() {
      refetch();
      navigation.goBack();
    },
  });

  // Delete Review
  const [deleteReviewMutation] = useDeleteReviewMutation({
    async onCompleted() {
      refetch();
      navigation.goBack();
    },
  });

  return (
    <ScrollView keyboardDismissMode="interactive">
      <List.Section title={`${id ? 'Edit' : 'Create'} Review - ${title}`}>
        <Card.Content>
          <List.Section title="Rating">
            <View style={styles.tagContainer}>
              <IconButton
                icon="star"
                color={value >= 1 ? theme.colors.primary : '#d3d3d3'}
                size={32}
                onPress={() => setValue(1)}
              />
              <IconButton
                icon="star"
                color={value >= 2 ? theme.colors.primary : '#d3d3d3'}
                size={32}
                onPress={() => setValue(2)}
              />
              <IconButton
                icon="star"
                color={value >= 3 ? theme.colors.primary : '#d3d3d3'}
                size={32}
                onPress={() => setValue(3)}
              />
              <IconButton
                icon="star"
                color={value >= 4 ? theme.colors.primary : '#d3d3d3'}
                size={32}
                onPress={() => setValue(4)}
              />
              <IconButton
                icon="star"
                color={value >= 5 ? theme.colors.primary : '#d3d3d3'}
                size={32}
                onPress={() => setValue(5)}
              />
            </View>
          </List.Section>
          <TextInput
            onChangeText={(text) => setComment(text)}
            value={comment}
            multiline
            placeholder="Comments"
            label="Comments"
            mode="outlined"
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
          />
        </Card.Content>
        <View style={styles.buttonContainer}>
          <Button
            mode="outlined"
            labelStyle={{ color: theme.colors.text }}
            style={{
              marginVertical: 5,
              backgroundColor: theme.colors.accent,
            }}
            onPress={() => {
              id
                ? updateReviewMutation({
                    variables: {
                      id,
                      comment: comment,
                      value: value,
                      book: bookId,
                    },
                  })
                : createReviewMutation({
                    variables: { comment: comment, value: value, book: bookId },
                  });
            }}
          >
            Save Review
          </Button>
          {item.id ? (
            <Button
              mode="outlined"
              labelStyle={{ color: theme.colors.text }}
              style={{
                marginVertical: 5,
                backgroundColor: theme.colors.accent,
              }}
              onPress={() => {
                deleteReviewMutation({ variables: { id: item.id } });
              }}
            >
              Delete Review
            </Button>
          ) : null}
        </View>
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: width - 40,
    marginVertical: 5,
  },
  buttonContainer: {
    padding: 25,
  },
  tagStyle: {
    marginLeft: 2,
    marginRight: 6,
    marginBottom: 8,
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  tagContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
});
