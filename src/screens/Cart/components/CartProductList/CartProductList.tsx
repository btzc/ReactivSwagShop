import React from 'react';
import {CartRemoveButton} from '../CartRemoveButton/CartRemoveButton';
import {FlatList, View, Image, Text, StyleSheet, Alert} from 'react-native';
import {CartItem} from '../../../../types/cartItem';
import {useCart} from '../../../../data/context/cart/hooks/useCart';

export const CartProductList = () => {
  const {removeFromCart, cartItems} = useCart();

  const confirmRemoveItem = (productId: string) => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item from the cart?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Remove', onPress: () => removeFromCart(productId)},
      ],
    );
  };

  const renderCartItem = ({item}: {item: CartItem}) => (
    <View style={styles.cartItem}>
      <Image source={{uri: item.imageUrl}} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productPrice}>
          ${Number(item.price.amount).toFixed(2)}
        </Text>
        <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
        <CartRemoveButton removeFromCart={() => confirmRemoveItem(item.id)} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={cartItems}
      keyExtractor={item => item.id}
      renderItem={renderCartItem}
      contentContainerStyle={styles.cartList}
    />
  );
};

const styles = StyleSheet.create({
  cartList: {
    paddingBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 16,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
  },
  productQuantity: {
    fontSize: 14,
  },
});
