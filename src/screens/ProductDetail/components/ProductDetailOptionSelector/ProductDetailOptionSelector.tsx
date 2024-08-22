import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ProductDetailOptionSelectorProps {
  name: string;
  selectedValue: string;
  onPress: () => void;
}

export const ProductDetailOptionSelector = ({
  name,
  selectedValue,
  onPress,
}: ProductDetailOptionSelectorProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>{selectedValue}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  name: {
    fontWeight: 'bold',
  },
  value: {
    color: '#555',
  },
});
