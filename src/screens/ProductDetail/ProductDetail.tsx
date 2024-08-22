import React from 'react';
import {Text, Image, StyleSheet, ScrollView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Product} from '../../types/product';
import {CollectionNativeStackParamList} from '../../navigation/stacks/CollectionNavigator';
import {Button} from '../../polaris-at-home/Button/Button';
import {ProductDetailDescription} from './components/ProductDetailDescription/ProductDetailDescription';
import {CartItem} from '../../types/cartItem';
import {useCart} from '../../data/context/cart/hooks/useCart';
import {ProductDetailQuantityStepper} from './components/ProductDetailQuantityStepper/ProductDetailQuantityStepper';
import {useProductDetailQuantityStepper} from './hooks/useProductDetailQuantityStepper';

export interface ProductDetailParams {
  product: Product;
}

export const ProductDetail = () => {
  const {addToCart} = useCart();
  const {quantity, onIncrease, onDecrease} = useProductDetailQuantityStepper();

  const {product} =
    useRoute<RouteProp<CollectionNativeStackParamList, 'ProductDetail'>>()
      .params;

  const {id, imageUrl, title, price, description} = product;
  const {amount, currencyCode} = price;

  const handleAddToCart = () => {
    const productToAdd = {
      id,
      imageUrl,
      title,
      price,
      quantity,
    } as CartItem;
    addToCart(productToAdd);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>
        ${Number(amount).toFixed(2)} {currencyCode}
      </Text>
      <ProductDetailQuantityStepper
        quantity={quantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
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
    paddingBottom: 24,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
