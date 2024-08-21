import React from 'react';
import {ProductList} from './components/ProductList/ProductList';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CollectionNativeStackParamList} from '../../navigation/stacks/CollectionNavigator';

import {LoadingIndicator} from '../../polaris-at-home/LoadingIndicator/LoadingIndicator';
import {useProducts} from '../../data/context/products/hooks/useProducts';

export const CollectionScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<CollectionNativeStackParamList>>();

  const {products, loading, error} = useProducts();

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    // show error here
  }

  return (
    <ProductList
      products={products}
      onProductPress={product => {
        navigate('ProductDetail', {
          product,
        });
      }}
    />
  );
};
