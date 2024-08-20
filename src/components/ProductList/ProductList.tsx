import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ProductCard} from '../ProductCard/ProductCard';
import {Money} from '../../types/product';

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: Money;
}

interface ProductListProps {
  products: Product[];
  onProductPress: () => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onProductPress,
}) => {
  const renderItem = ({item}: {item: Product}) => (
    <View style={styles.cardWrapper}>
      <ProductCard
        imageUrl={item.imageUrl}
        title={item.title}
        price={item.price}
        onPress={onProductPress}
      />
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  cardWrapper: {
    flex: 1,
    margin: 5,
  },
});

export default ProductList;
