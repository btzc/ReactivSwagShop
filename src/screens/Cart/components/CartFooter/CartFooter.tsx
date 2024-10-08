import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useCart} from '../../../../data/context/cart/hooks/useCart';

export const CartFooter = () => {
  const {cartTotal} = useCart();
  return (
    <View style={styles.totalContainer}>
      <Text style={styles.totalText}>Total</Text>
      <Text style={styles.totalAmount}>${Number(cartTotal).toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
