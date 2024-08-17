import React from 'react';
import type {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface ProductCardProps {
  children: ReactNode;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({children, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default ProductCard;
