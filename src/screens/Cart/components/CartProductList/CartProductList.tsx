import React from 'react';
import {CartRemoveButton} from '../CartRemoveButton/CartRemoveButton';
import {FlatList, View, Image, Text, StyleSheet} from 'react-native';

const MOCK_CART_ITEMS = [
  {
    availableForSale: true,
    description:
      "Made to be stylish as well as comfortable, the Independent Trading Co. SS4500 personalized hooded sweatshirt delivers on all fronts. Made from an 80% - 20% cotton/polyester blend, it strikes the perfect balance between cozy and stretchy. What's more, the metal eyelets for your hoodie drawstrings add durability while the jersey-lined hood keeps you nice & warm when it’s needed. .: 80% cotton, 20 % polyester fleece with 100% cotton face (fiber content may vary for different colors).: Medium-heavy fabric (8.5 oz /yd² (280 g/m²)).: Regular fit.: Tear-away label",
    id: '1',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0654/2458/8973/files/15432182594235543675_2048_1180x400.jpg?v=1713378389',
    price: {
      amount: '28.96',
      currencyCode: 'CAD',
    },
    title: 'Product 1',
    quantity: 2,
  },
  {
    availableForSale: true,
    description:
      "Made to be stylish as well as comfortable, the Independent Trading Co. SS4500 personalized hooded sweatshirt delivers on all fronts. Made from an 80% - 20% cotton/polyester blend, it strikes the perfect balance between cozy and stretchy. What's more, the metal eyelets for your hoodie drawstrings add durability while the jersey-lined hood keeps you nice & warm when it’s needed. .: 80% cotton, 20 % polyester fleece with 100% cotton face (fiber content may vary for different colors).: Medium-heavy fabric (8.5 oz /yd² (280 g/m²)).: Regular fit.: Tear-away label",
    id: '2',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0654/2458/8973/files/107112-hoodie-mockup_1180x400.png.jpg?v=1719328890',
    price: {
      amount: '28.96',
      currencyCode: 'CAD',
    },
    title: 'Product 2',
    quantity: 1,
  },
];

export const CartProductList = () => {
  const renderCartItem = ({item}: {item: any}) => (
    <View style={styles.cartItem}>
      <Image source={{uri: item.imageUrl}} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productPrice}>
          ${Number(item.price.amount).toFixed(2)}
        </Text>
        <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
        <CartRemoveButton />
      </View>
    </View>
  );

  return (
    <FlatList
      data={MOCK_CART_ITEMS}
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
