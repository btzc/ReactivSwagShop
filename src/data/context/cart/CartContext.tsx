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
        cartItem => cartItem.id === item.id,
      );
      if (existingItem) {
        const newCart = prevCartItems.map(cartItem =>
          cartItem.id === item.id
            ? {...cartItem, quantity: cartItem.quantity + item.quantity}
            : cartItem,
        ) as CartItem[];
        return newCart;
      } else {
        return [...prevCartItems, {...item}];
      }
    });
  };

  const incrementQuantity = (itemId: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const decrementQuantity = (itemId: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item,
      ),
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));
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
