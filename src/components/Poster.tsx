import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme, IconButton } from 'react-native-paper';
// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 2,
  rows = 2;

export default function Poster(props) {
  const theme = useTheme();
  const {
    id,
    comment,
    value,
    book: { title, image },
    onPress,
  } = props;
  const cleanValue = parseInt(value[value.length - 1]);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        onPress &&
        onPress({ id, comment, value: cleanValue, book: { title, image } })
      }
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <View style={styles.tagContainer}>
        <IconButton
          icon="star"
          color={cleanValue >= 1 ? theme.colors.primary : '#d3d3d3'}
          size={32}
        />
        <IconButton
          icon="star"
          color={cleanValue >= 2 ? theme.colors.primary : '#d3d3d3'}
          size={32}
        />
        <IconButton
          icon="star"
          color={cleanValue >= 3 ? theme.colors.primary : '#d3d3d3'}
          size={32}
        />
        <IconButton
          icon="star"
          color={cleanValue >= 4 ? theme.colors.primary : '#d3d3d3'}
          size={32}
        />
        <IconButton
          icon="star"
          color={cleanValue >= 5 ? theme.colors.primary : '#d3d3d3'}
          size={32}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
  },
  imageContainer: {
    flex: 1, // take up all available space
  },
  image: {
    borderRadius: 10, // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  title: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  genre: {
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
});
