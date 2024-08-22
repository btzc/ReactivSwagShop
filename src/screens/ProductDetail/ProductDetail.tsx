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
import {ProductDetailPrice} from './components/ProductDetailPrice/ProductDetailPrice';

export interface ProductDetailParams {
  product: Product;
}

export const ProductDetail = () => {
  const {addToCart} = useCart();
  const {quantity, onIncrease, onDecrease} = useProductDetailQuantityStepper();

  const {product} =
    useRoute<RouteProp<CollectionNativeStackParamList, 'ProductDetail'>>()
      .params;

  const {id, imageUrl, title, description, variants} = product;
  const firstAvailableVariant = variants.find(
    variant => variant.availableForSale,
  );
  const price = firstAvailableVariant?.price || variants[0].price;
  const availableForSale =
    firstAvailableVariant?.availableForSale || variants[0].availableForSale;

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
      <ProductDetailPrice availableForSale={availableForSale} price={price} />

      <ProductDetailQuantityStepper
        quantity={quantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        availableForSale={availableForSale}
      />
      <View style={styles.buttonContainer}>
        <Button
          disabled={!availableForSale}
          onPress={handleAddToCart}
          text="Add to Cart"
        />
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
  buttonContainer: {
    paddingTop: 16,
    paddingBottom: 24,
    backgroundColor: '#fff',
  },
});
