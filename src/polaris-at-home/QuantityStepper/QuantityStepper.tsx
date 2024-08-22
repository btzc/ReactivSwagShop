import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type QuantityStepperProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  disableDecrease?: boolean;
  disableIncrease?: boolean;
  accessibilityLabelIncrease?: string;
  accessibilityLabelDecrease?: string;
};

export const QuantityStepper = ({
  quantity,
  onIncrease,
  onDecrease,
  disableDecrease = false,
  disableIncrease = false,
  accessibilityLabelIncrease = 'Increase quantity',
  accessibilityLabelDecrease = 'Decrease quantity',
}: QuantityStepperProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disableDecrease}
        onPress={onDecrease}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabelDecrease}>
        <Text style={[styles.button, disableDecrease && styles.disabledButton]}>
          -
        </Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity
        disabled={disableIncrease}
        onPress={onIncrease}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabelIncrease}>
        <Text style={[styles.button, disableIncrease && styles.disabledButton]}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
  },
  button: {
    color: '#0000FF',
  },
  disabledButton: {
    color: '#a9a9a9',
  },
  quantity: {
    marginHorizontal: 10,
  },
});
