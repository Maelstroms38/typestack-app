import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useCreateBookMutation, useDeleteBookMutation } from '../../graphql';
import { Button, TextInput, Text, useTheme } from 'react-native-paper';

const { width } = Dimensions.get('window');

export default function PlaceForm(props) {
  const theme = useTheme();
  const route = useRoute();
  const { navigation } = props;
  const { item } = route.params as any;
  const {
    authors,
    categories,
    description,
    industryIdentifiers,
    language,
    thumbnail,
    title
  } = (item && item.volumeInfo) || {};
  const [name, setName] = useState(title || '');
  const [summary, setSummary] = useState(description || '');
  const [imageUrl, setImageUrl] = useState(thumbnail || '');
  const [author, setAuthor] = useState(
    (authors && authors.length && authors[0]) || ''
  );
  const [genres, setGenres] = useState(categories);
  const [isbn, setISBN] = useState(
    (industryIdentifiers &&
      industryIdentifiers.length &&
      industryIdentifiers.find(id => id.type == 'ISBN_13').identifier) ||
      ''
  );
  const [languageCode, setLanguage] = useState(language || '');

  // Create Book
  const [createBookMutation] = useCreateBookMutation({
    async onCompleted({ createBook }) {
      // console.log(createBook, 'successfully created book!');
      navigation.navigate('Schedule');
    }
  });

  // Update Place
  // const [updatePlaceMutation] = useUpdatePlaceMutation({
  //   async onCompleted({ updatePlace }) {
  //     navigation.navigate('Detail', { item: updatePlace });
  //   }
  // });

  // Delete Place
  // const [deletePlaceMutation] = useDeletePlaceMutation({
  //   async onCompleted(id) {
  //     navigation.navigate('Profile');
  //   }
  // });

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.colors.background }
      ]}
    >
      <TextInput
        onChangeText={text => setName(text)}
        value={title}
        placeholder="Title"
        label="Title"
        mode="outlined"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        onChangeText={text => setAuthor(text)}
        value={author}
        placeholder="Author Name"
        label="Author Name"
        mode="outlined"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        onChangeText={text => setSummary(text)}
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
        onChangeText={text => setImageUrl(text)}
        value={imageUrl}
        placeholder="Image URL"
        label="Image URL"
        mode="outlined"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        onChangeText={text => setISBN(text)}
        value={isbn}
        placeholder="ISBN"
        label="ISBN"
        mode="outlined"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        onChangeText={text => setLanguage(text)}
        value={imageUrl}
        placeholder="Language"
        label="Language"
        mode="outlined"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#161616',
          lineHeight: 38
        }}
      >
        Genres: {genres && genres.join(', ')}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          mode="outlined"
          labelStyle={{ color: theme.colors.text }}
          style={{
            backgroundColor: theme.colors.accent,
            marginTop: 20
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
                genres: [genres]
              }
            });
          }}
        >
          Save Book
        </Button>
        <Button
          mode="outlined"
          labelStyle={{ color: theme.colors.text }}
          style={{
            backgroundColor: theme.colors.accent,
            marginTop: 20
          }}
          onPress={
            () => {}
            // deleteBookMutation({ variables: { id: parseInt(item.id) } })
          }
        >
          Delete Book
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  input: {
    width: width - 40,
    height: 60,
    marginTop: 5
  },
  buttonContainer: {
    width: '100%'
  }
});
