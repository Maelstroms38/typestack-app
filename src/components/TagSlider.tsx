import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Chip } from 'react-native-paper';

const TagSlider = (props) => {
  const { tags, onSelect, onClose } = props;
  return (
    <View style={styles.scrollContainer}>
      {tags &&
        tags.map((tag, index) => {
          return (
            <Chip
              key={index}
              style={styles.tagStyle}
              mode="outlined"
              onPress={() => onSelect && onSelect(tag, index)}
              onClose={
                onClose
                  ? () => {
                      onClose(tag, index);
                    }
                  : null
              }
            >
              {tag.name || tag}
            </Chip>
          );
        })}
    </View>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  tagStyle: {
    marginLeft: 2,
    marginRight: 6,
    marginBottom: 8,
    justifyContent: 'center',
  },
});

export default TagSlider;
