import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Money} from '../../../../types/product';

interface ProductDetailPriceProps {
  availableForSale: boolean;
  price: Money;
}

export const ProductDetailPrice = ({
  availableForSale,
  price,
}: ProductDetailPriceProps) => {
  const {amount, currencyCode} = price;

  if (!availableForSale) {
    return (
      <View style={styles.textContainer}>
        <Text style={[styles.price, styles.strikeThrough]}>
          ${Number(amount).toFixed(2)} {currencyCode}
        </Text>
        <Text style={styles.soldOut}>Sold out</Text>
      </View>
    );
  }

  return (
    <Text style={styles.price}>
      ${Number(amount).toFixed(2)} {currencyCode}
    </Text>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginBottom: 16,
  },
  soldOut: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
