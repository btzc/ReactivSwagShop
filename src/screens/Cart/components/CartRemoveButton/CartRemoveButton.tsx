import React from 'react';
import {StyleSheet} from 'react-native';
import {ClickableText} from '../../../../polaris-at-home/ClickableText/ClickableText';

interface CartRemoveButtonProps {
  removeFromCart: () => void;
}

export const CartRemoveButton = ({removeFromCart}: CartRemoveButtonProps) => {
  return (
    <ClickableText
      onPress={removeFromCart}
      text="Remove"
      style={styles.removeButton}
    />
  );
};

const styles = StyleSheet.create({
  removeButton: {
    fontSize: 14,
    color: '#FF0000',
  },
});
