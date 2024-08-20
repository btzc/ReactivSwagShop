import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import {products} from '../../services/mock';

export const CollectionScreen = () => {
  return <ProductList products={products} onProductPress={() => {}} />;
};
