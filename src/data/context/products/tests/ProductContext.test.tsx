import React from 'react';
import {Text, View} from 'react-native';
import {render, waitFor} from '@testing-library/react-native';
import {ProductContextProvider} from '../ProductContext';
import {LoadingIndicator} from '../../../../polaris-at-home/LoadingIndicator/LoadingIndicator';
import {useProducts} from '../hooks/useProducts';

const mockFetchProducts = jest.fn();

jest.mock('../hooks/useFetchProducts', () => ({
  useFetchProducts: () => ({
    fetchProducts: mockFetchProducts,
  }),
}));

const mockProducts = [
  {
    id: '1',
    title: 'Product 1',
    description: 'Description 1',
    availableForSale: true,
  },
  {
    id: '2',
    title: 'Product 2',
    description: 'Description 2',
    availableForSale: false,
  },
];

const TestComponent = () => {
  const {products, loading, error} = useProducts();

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      {products.map(product => (
        <Text key={product.id}>{product.title}</Text>
      ))}
    </View>
  );
};

describe('ProductContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show loading indicator while loading', async () => {
    const {queryByTestId} = render(
      <ProductContextProvider>
        <TestComponent />
      </ProductContextProvider>,
    );

    const loadingIndicator = await waitFor(() =>
      queryByTestId('loading-indicator'),
    );
    expect(loadingIndicator).toBeTruthy();
  });

  it('should provide products after fetching', async () => {
    mockFetchProducts.mockResolvedValueOnce(mockProducts);

    const {getByText, queryByTestId} = render(
      <ProductContextProvider>
        <TestComponent />
      </ProductContextProvider>,
    );

    expect(queryByTestId('loading-indicator')).toBeTruthy();

    await waitFor(() => {
      expect(getByText('Product 1')).toBeTruthy();
      expect(getByText('Product 2')).toBeTruthy();
    });
  });

  it('should handle errors during fetching', async () => {
    mockFetchProducts.mockRejectedValueOnce(new Error('Network error'));

    const {getByText, queryByTestId} = render(
      <ProductContextProvider>
        <TestComponent />
      </ProductContextProvider>,
    );

    expect(queryByTestId('loading-indicator')).toBeTruthy();

    await waitFor(() => {
      expect(getByText('Failed to load products')).toBeTruthy();
    });
  });
});
