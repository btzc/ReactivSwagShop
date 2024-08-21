import React from 'react';
import {Button, Text} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import {CartContextProvider} from '../CartContext';
import {useCart} from '../hooks/useCart';

describe('CartContext', () => {
  const TestComponent = () => {
    const {cartItems, addToCart, removeFromCart, cartTotal} = useCart();

    return (
      <>
        {cartItems.map(item => (
          <Text key={item.id}>
            {item.title} - ${item.price.amount}
          </Text>
        ))}
        <Text>Total: ${Number(cartTotal).toFixed(2)}</Text>
        <Button
          title="Add Item"
          onPress={() =>
            addToCart({
              id: '1',
              title: 'Test Product',
              price: {
                amount: '9.99',
                currencyCode: 'CAD',
              },
              imageUrl: 'test.jpg',
              quantity: 1,
            })
          }
        />
        <Button title="Remove Item" onPress={() => removeFromCart('1')} />
      </>
    );
  };

  it('should add item to cart', async () => {
    const {getByText} = render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>,
    );

    const addButton = getByText('Add Item');

    fireEvent.press(addButton);

    expect(getByText('Test Product - $9.99')).toBeTruthy();
  });

  it('should remove item from cart', async () => {
    const {getByText, queryByText} = render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>,
    );

    const addButton = getByText('Add Item');
    const removeButton = getByText('Remove Item');

    fireEvent.press(addButton);

    expect(getByText('Test Product - $9.99')).toBeTruthy();

    fireEvent.press(removeButton);

    expect(queryByText('Test Product - $9.99')).toBeNull();
  });

  it('should calculate total amount correctly', async () => {
    const {getByText} = render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>,
    );

    const addButton = getByText('Add Item');

    fireEvent.press(addButton);

    expect(getByText('Total: $9.99')).toBeTruthy();

    fireEvent.press(addButton);

    expect(getByText('Total: $19.98')).toBeTruthy();
  });
});
