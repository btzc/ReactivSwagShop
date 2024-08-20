import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import {products} from '../../services/mock';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CollectionNativeStackParamList} from '../../navigation/stacks/CollectionNavigator';

export const CollectionScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<CollectionNativeStackParamList>>();
  return (
    <ProductList
      products={products}
      onProductPress={() => {
        navigate('ProductDetail');
      }}
    />
  );
};
