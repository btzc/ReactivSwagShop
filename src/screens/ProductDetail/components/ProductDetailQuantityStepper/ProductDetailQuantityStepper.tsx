import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {QuantityStepper} from '../../../../polaris-at-home/QuantityStepper/QuantityStepper';

interface ProductDetailQuantityStepperProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const ProductDetailQuantityStepper = ({
  quantity,
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
        disabled={quantity === 1}
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
