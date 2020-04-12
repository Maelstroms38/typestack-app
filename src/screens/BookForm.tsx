import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useCreateBookMutation, useDeleteBookMutation } from '../../graphql';
import { Button, TextInput, useTheme, List, Card } from 'react-native-paper';
import { TagSlider } from '../components';

const { width } = Dimensions.get('window');

export default function BookForm(props) {
  const theme = useTheme();
  const route = useRoute();
  const { navigation } = props;
  const { item } = (route.params as any) || {};
  const { volumeInfo, id } = item || {};
  const {
    authors,
    categories,
    description,
    industryIdentifiers,
    language,
    thumbnail,
    title,
  } = volumeInfo || {};
  const [name, setName] = useState(title || '');
  const [summary, setSummary] = useState(description || '');
  const [imageUrl, setImageUrl] = useState(thumbnail || '');
  const [author, setAuthor] = useState(
    (authors && authors.length && authors[0]) || ''
  );
  const [genres] = useState(categories);
  const [isbn, setISBN] = useState(
    (industryIdentifiers &&
      industryIdentifiers.length &&
      industryIdentifiers.find((id) => id.type == 'ISBN_13').identifier) ||
      ''
  );
  const [languageCode, setLanguage] = useState(language || '');

  let tags;
  if (genres) {
    tags = [...genres, isbn, languageCode];
  }

  // Create Book
  const [createBookMutation] = useCreateBookMutation({
    async onCompleted({ createBook }) {
      console.log(createBook, 'successfully created book!');
      navigation.navigate('Schedule');
    },
  });

  // Update Place
  // const [updatePlaceMutation] = useUpdatePlaceMutation({
  //   async onCompleted({ updatePlace }) {
  //     navigation.navigate('Detail', { item: updatePlace });
  //   }
  // });

  // Delete Book
  const [deleteBookMutation] = useDeleteBookMutation({
    async onCompleted(id) {
      navigation.navigate('Books');
    },
  });

  return (
    <ScrollView keyboardDismissMode="interactive">
      <List.Section title={'Create Book'}>
        <Card.Content>
          <TextInput
            onChangeText={(text) => setName(text)}
            value={title}
            placeholder="Title"
            label="Title"
            mode="outlined"
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
          />

          <TextInput
            onChangeText={(text) => setAuthor(text)}
            value={author}
            placeholder="Author Name"
            label="Author Name"
            mode="outlined"
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            onChangeText={(text) => setSummary(text)}
            value={description}
            multiline
            placeholder="Description"
            label="Description"
            mode="outlined"
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            onChangeText={(text) => setImageUrl(text)}
            value={imageUrl}
            placeholder="Image URL"
            label="Image URL"
            mode="outlined"
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
          />
          <List.Section title="Genres, ISBN and Language">
            <View style={styles.tagContainer}>
              <TagSlider tags={tags} />
            </View>
          </List.Section>
          {/*<TextInput
            onChangeText={(text) => setISBN(text)}
            value={isbn}
            placeholder="ISBN"
            label="ISBN"
            mode="outlined"
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            onChangeText={(text) => setLanguage(text)}
            value={languageCode}
            placeholder="Language"
            label="Language"
            mode="outlined"
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
          />*/}
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
              // item.id ? updateBookMutation
              createBookMutation({
                variables: {
                  title: name,
                  summary,
                  image: imageUrl,
                  isbn,
                  author: author,
                  language: languageCode,
                  genres: genres,
                },
              });
            }}
          >
            Save Book
          </Button>
          <Button
            mode="outlined"
            labelStyle={{ color: theme.colors.text }}
            style={{
              marginVertical: 5,
              backgroundColor: theme.colors.accent,
            }}
            onPress={() => {
              deleteBookMutation({ variables: { id: item.id } });
            }}
          >
            Delete Book
          </Button>
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
    paddingHorizontal: 10,
  },
});
