import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {Product} from '../../../types/product';
import {useFetchProducts} from './hooks/useFetchProducts';

interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined,
);

export const ProductContextProvider = ({children}: {children: ReactNode}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const {fetchProducts} = useFetchProducts();

  useEffect(
    () => {
      const loadProducts = async () => {
        try {
          setLoading(true);
          const fetchedProducts = await fetchProducts();
          setLoading(false);
          setError(null);
          setProducts(fetchedProducts);
        } catch (err) {
          setLoading(false);
          setError('Failed to load products');
        }
      };

      loadProducts();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <ProductContext.Provider value={{products, loading, error}}>
      {children}
    </ProductContext.Provider>
  );
};
