import {useState} from 'react';

export const useProductDetailQuantityStepper = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const onIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const onDecrease = () => {
    setQuantity(prev => prev - 1);
  };

  return {
    onIncrease,
    onDecrease,
    quantity,
  };
};
