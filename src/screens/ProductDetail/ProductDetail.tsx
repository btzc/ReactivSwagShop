import React from 'react';
import {Text, Image, StyleSheet, ScrollView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Product} from '../../types/product';
import {CollectionNativeStackParamList} from '../../navigation/stacks/CollectionNavigator';
import {Button} from '../../polaris-at-home/Button/Button';
import {ProductDetailDescription} from './components/ProductDetailDescription';

export interface ProductDetailParams {
  product: Product;
}

export const ProductDetail = () => {
  const {product} =
    useRoute<RouteProp<CollectionNativeStackParamList, 'ProductDetail'>>()
      .params;

  const {imageUrl, title, price, description} = product;
  const {amount, currencyCode} = price;

  const handleAddToCart = () => {
    alert('Added to cart!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>
        ${Number(amount).toFixed(2)} {currencyCode}
      </Text>
      <View style={styles.buttonContainer}>
        <Button onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Button>
      </View>
      <ProductDetailDescription description={description} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginBottom: 16,
  },
  buttonContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
