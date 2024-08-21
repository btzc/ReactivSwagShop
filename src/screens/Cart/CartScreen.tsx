import React from 'react';
import {View, StyleSheet} from 'react-native';

import {CartFooter} from './components/CartFooter/CartFooter';
import {CartProductList} from './components/CartProductList/CartProductList';

export const CartScreen = () => {
  return (
    <View style={styles.container}>
      <CartProductList />
      <CartFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
