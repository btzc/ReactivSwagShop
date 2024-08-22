import React, {createContext, ReactNode, useState} from 'react';
import {CartItem} from '../../../types/cartItem';

interface CartContextType {
  cartItems: CartItem[];
  cartTotal: string;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const CartContextProvider = ({children}: {children: ReactNode}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems(prevCartItems => {
      const existingItem = prevCartItems.find(
        cartItem =>
          cartItem.productId === item.productId &&
          cartItem.variantId === item.variantId,
      );
      if (existingItem) {
        const newCart = prevCartItems.map(cartItem =>
          cartItem.productId === item.productId &&
          cartItem.variantId === item.variantId
            ? {...cartItem, quantity: cartItem.quantity + item.quantity}
            : cartItem,
        ) as CartItem[];
        return newCart;
      } else {
        return [...prevCartItems, {...item}];
      }
    });
  };

  const incrementQuantity = (itemVariantId: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.variantId === itemVariantId
          ? {...item, quantity: item.quantity + 1}
          : item,
      ),
    );
  };

  const decrementQuantity = (itemVariantId: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.variantId === itemVariantId && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item,
      ),
    );
  };

  const removeFromCart = (variantId: string) => {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item.variantId !== variantId),
    );
  };

  const cartTotal = String(
    cartItems.reduce(
      (total, item) => total + Number(item.price.amount) * item.quantity,
      0,
    ),
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartTotal,
        incrementQuantity,
        decrementQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};
