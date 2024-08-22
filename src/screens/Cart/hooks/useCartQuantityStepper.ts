import {useCart} from '../../../data/context/cart/hooks/useCart';

interface CartQuantityStepperParams {
  variantId: string;
}

export const useCartQuantityStepper = ({
  variantId,
}: CartQuantityStepperParams) => {
  const {incrementQuantity, decrementQuantity} = useCart();

  const onIncrease = () => {
    incrementQuantity(variantId);
  };

  const onDecrease = () => {
    decrementQuantity(variantId);
  };

  return {
    onIncrease,
    onDecrease,
  };
};
