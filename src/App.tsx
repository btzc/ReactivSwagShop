/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {products} from './services/mock';
import ProductList from './components/ProductList/ProductList';

const App = (): React.JSX.Element => {
  return <ProductList products={products} onProductPress={() => {}} />;
};

export default App;
