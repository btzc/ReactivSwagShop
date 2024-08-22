import React from 'react';
import {QuantityStepper} from '../../../../polaris-at-home/QuantityStepper/QuantityStepper';
import {useCartQuantityStepper} from '../../hooks/useCartQuantityStepper';

interface CartQuantityStepper {
  quantity: number;
  itemId: string;
}

export const CartQuantityStepper = ({
  quantity,
  itemId,
}: CartQuantityStepper) => {
  const {onIncrease, onDecrease} = useCartQuantityStepper({itemId});

  return (
    <QuantityStepper
      quantity={quantity}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      disableDecrease={quantity === 1}
    />
  );
};
