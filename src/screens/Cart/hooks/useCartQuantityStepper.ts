import {useCart} from '../../../data/context/cart/hooks/useCart';

interface CartQuantityStepperParams {
  itemId: string;
}

export const useCartQuantityStepper = ({itemId}: CartQuantityStepperParams) => {
  const {incrementQuantity, decrementQuantity} = useCart();

  const onIncrease = () => {
    incrementQuantity(itemId);
  };

  const onDecrease = () => {
    decrementQuantity(itemId);
  };

  return {
    onIncrease,
    onDecrease,
  };
};
