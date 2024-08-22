import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

type QuantityStepperProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  disableDecrease?: boolean;
  disableIncrease?: boolean;
};

export const QuantityStepper = ({
  quantity,
  onIncrease,
  onDecrease,
  disableDecrease = false,
  disableIncrease = false,
}: QuantityStepperProps) => {
  return (
    <View style={styles.container}>
      <Button disabled={disableDecrease} title="-" onPress={onDecrease} />
      <Text style={styles.quantity}>{quantity}</Text>
      <Button disabled={disableIncrease} title="+" onPress={onIncrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});
