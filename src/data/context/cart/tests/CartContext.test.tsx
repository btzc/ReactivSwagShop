import React from 'react';
import {Button, Text} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import {CartContextProvider} from '../CartContext';
import {useCart} from '../hooks/useCart';

describe('CartContext', () => {
  const TestComponent = () => {
    const {
      cartItems,
      addToCart,
      removeFromCart,
      cartTotal,
      incrementQuantity,
      decrementQuantity,
    } = useCart();

    return (
      <>
        {cartItems.map(item => (
          <Text key={item.variantId}>
            {item.productTitle} - {item.variantTitle} - ${item.price.amount} -{' '}
            {item.quantity}
          </Text>
        ))}
        <Text>Total: ${Number(cartTotal).toFixed(2)}</Text>
        <Button
          title="Add Item"
          onPress={() =>
            addToCart({
              productId: '1',
              variantId: 'variant-1',
              productTitle: 'Test Product',
              variantTitle: 'Small / S',
              price: {
                amount: '9.99',
                currencyCode: 'CAD',
              },
              imageUrl: 'test.jpg',
              quantity: 1,
            })
          }
        />
        <Button
          title="Remove Item"
          onPress={() => removeFromCart('variant-1')}
        />
        <Button
          title="Increment Quantity"
          onPress={() => incrementQuantity('variant-1')}
        />
        <Button
          title="Decrement Quantity"
          onPress={() => decrementQuantity('variant-1')}
        />
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

    expect(getByText('Test Product - Small / S - $9.99 - 1')).toBeTruthy();
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

    expect(getByText('Test Product - Small / S - $9.99 - 1')).toBeTruthy();

    fireEvent.press(removeButton);

    expect(queryByText('Test Product - Small / S - $9.99 - 1')).toBeNull();
  });

  it('should calculate total amount correctly', async () => {
    const {getByText} = render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>,
    );

    const addButton = getByText('Add Item');

    fireEvent.press(addButton);

    expect(getByText('Test Product - Small / S - $9.99 - 1')).toBeTruthy();

    fireEvent.press(addButton);

    expect(getByText('Total: $19.98')).toBeTruthy();
  });

  it('should increment the quantity correctly', async () => {
    const {getByText, queryByText} = render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>,
    );

    const addButton = getByText('Add Item');
    const incrementQuantityButton = getByText('Increment Quantity');

    fireEvent.press(addButton);

    expect(getByText('Test Product - Small / S - $9.99 - 1')).toBeTruthy();

    fireEvent.press(incrementQuantityButton);

    expect(queryByText('Test Product - Small / S - $9.99 - 2')).toBeTruthy();
  });

  it('should decrement the quantity correctly', async () => {
    const {getByText, queryByText} = render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>,
    );

    const addButton = getByText('Add Item');
    const decrementQuantityButton = getByText('Decrement Quantity');

    fireEvent.press(addButton);

    expect(getByText('Test Product - Small / S - $9.99 - 1')).toBeTruthy();

    fireEvent.press(addButton);

    expect(getByText('Test Product - Small / S - $9.99 - 2')).toBeTruthy();

    fireEvent.press(decrementQuantityButton);

    expect(queryByText('Test Product - Small / S - $9.99 - 1')).toBeTruthy();
  });
});
