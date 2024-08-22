import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {QuantityStepper} from '../../../../polaris-at-home/QuantityStepper/QuantityStepper';

interface ProductDetailQuantityStepperProps {
  quantity: number;
  availableForSale: boolean;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const ProductDetailQuantityStepper = ({
  quantity,
  availableForSale,
  onIncrease,
  onDecrease,
}: ProductDetailQuantityStepperProps) => {
  return (
    <View style={styles.quantityStepperContainer}>
      <Text style={styles.quantityStepperText}>Quantity</Text>
      <QuantityStepper
        quantity={quantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        disableDecrease={quantity === 1 || !availableForSale}
        disableIncrease={!availableForSale}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  quantityStepperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 16,
  },
  quantityStepperText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
