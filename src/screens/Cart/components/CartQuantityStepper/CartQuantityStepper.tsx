import React from 'react';
import {QuantityStepper} from '../../../../polaris-at-home/QuantityStepper/QuantityStepper';
import {useCartQuantityStepper} from '../../hooks/useCartQuantityStepper';

interface CartQuantityStepper {
  quantity: number;
  variantId: string;
}

export const CartQuantityStepper = ({
  quantity,
  variantId,
}: CartQuantityStepper) => {
  const {onIncrease, onDecrease} = useCartQuantityStepper({variantId});

  return (
    <QuantityStepper
      quantity={quantity}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      disableDecrease={quantity === 1}
    />
  );
};
