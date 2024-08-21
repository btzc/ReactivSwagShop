import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {CollectionScreen} from '../CollectionScreen';
import {mockNavigation} from '../../../testUtils/mockNavigation';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigation.navigate,
    }),
  };
});

describe('ProductCard Navigation', () => {
  it('navigates to ProductDetail when the card is clicked', () => {
    render(<CollectionScreen />);

    fireEvent.press(screen.getByText('Unisex Hoodie'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('ProductDetail', {
      product: {
        availableForSale: true,
        description:
          "Made to be stylish as well as comfortable, the Independent Trading Co. SS4500 personalized hooded sweatshirt delivers on all fronts. Made from an 80% - 20% cotton/polyester blend, it strikes the perfect balance between cozy and stretchy. What's more, the metal eyelets for your hoodie drawstrings add durability while the jersey-lined hood keeps you nice & warm when it’s needed. .: 80% cotton, 20 % polyester fleece with 100% cotton face (fiber content may vary for different colors).: Medium-heavy fabric (8.5 oz /yd² (280 g/m²)).: Regular fit.: Tear-away label",
        id: 'gid://shopify/Product/7634433605805',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/0654/2458/8973/files/15432182594235543675_2048_1180x400.jpg?v=1713378389',
        price: {
          amount: '28.96',
          currencyCode: 'CAD',
        },
        title: 'Unisex Hoodie',
      },
    });
  });
});
