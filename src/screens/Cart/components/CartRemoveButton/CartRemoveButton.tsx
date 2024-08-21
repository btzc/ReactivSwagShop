import React from 'react';
import {Alert, StyleSheet} from 'react-native';
import {ClickableText} from '../../../../polaris-at-home/ClickableText/ClickableText';

export const CartRemoveButton = () => {
  const confirmRemoveItem = () => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item from the cart?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Remove', onPress: () => {}},
      ],
    );
  };

  return (
    <ClickableText
      onPress={confirmRemoveItem}
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
