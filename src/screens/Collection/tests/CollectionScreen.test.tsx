import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {CollectionScreen} from '../CollectionScreen';
import {mockNavigation} from '../../../testUtils/mockNavigation';
import {ProductContextProvider} from '../../../data/context/products/ProductContext';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigation.navigate,
    }),
  };
});

const mockFetchProducts = jest.fn();
jest.mock('../../../data/context/products/hooks/useFetchProducts', () => ({
  useFetchProducts: () => ({
    fetchProducts: mockFetchProducts,
  }),
}));

// TODO: Make a product test helper
const mockProducts = [
  {
    availableForSale: true,
    description:
      "Made to be stylish as well as comfortable, the Independent Trading Co. SS4500 personalized hooded sweatshirt delivers on all fronts. Made from an 80% - 20% cotton/polyester blend, it strikes the perfect balance between cozy and stretchy. What's more, the metal eyelets for your hoodie drawstrings add durability while the jersey-lined hood keeps you nice & warm when it’s needed. .: 80% cotton, 20 % polyester fleece with 100% cotton face (fiber content may vary for different colors).: Medium-heavy fabric (8.5 oz /yd² (280 g/m²)).: Regular fit.: Tear-away label",
    id: '1',
    imageUrl: 'url',
    price: {
      amount: '28.96',
      currencyCode: 'CAD',
    },
    title: 'Product 1',
  },
  {
    availableForSale: true,
    description:
      "Made to be stylish as well as comfortable, the Independent Trading Co. SS4500 personalized hooded sweatshirt delivers on all fronts. Made from an 80% - 20% cotton/polyester blend, it strikes the perfect balance between cozy and stretchy. What's more, the metal eyelets for your hoodie drawstrings add durability while the jersey-lined hood keeps you nice & warm when it’s needed. .: 80% cotton, 20 % polyester fleece with 100% cotton face (fiber content may vary for different colors).: Medium-heavy fabric (8.5 oz /yd² (280 g/m²)).: Regular fit.: Tear-away label",
    id: '2',
    imageUrl: 'url',
    price: {
      amount: '28.96',
      currencyCode: 'CAD',
    },
    title: 'Product 2',
  },
];

describe('ProductCard Navigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows a loading indicator when products are loading', async () => {
    mockFetchProducts.mockResolvedValueOnce({
      products: [],
      loading: true,
      error: null,
    });

    const {queryByTestId} = render(
      <ProductContextProvider>
        <CollectionScreen />
      </ProductContextProvider>,
    );

    const loadingIndicator = await waitFor(() =>
      queryByTestId('loading-indicator'),
    );
    expect(loadingIndicator).toBeTruthy();
  });

  it('navigates to ProductDetail when the card is clicked', async () => {
    mockFetchProducts.mockResolvedValueOnce(mockProducts);
    const {getByText, queryByTestId} = render(
      <ProductContextProvider>
        <CollectionScreen />
      </ProductContextProvider>,
    );

    expect(queryByTestId('loading-indicator')).toBeTruthy();

    const productCart = await waitFor(() => getByText('Product 1'));

    fireEvent.press(productCart);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('ProductDetail', {
      product: mockProducts[0],
    });
  });
});
