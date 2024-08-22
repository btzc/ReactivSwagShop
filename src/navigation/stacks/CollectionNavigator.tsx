import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  ProductDetail,
  ProductDetailParams,
} from '../../screens/ProductDetail/ProductDetail';
import {CollectionScreen} from '../../screens/Collection/CollectionScreen';
import {ProductContextProvider} from '../../data/context/products/ProductContext';

export type CollectionNativeStackParamList = {
  Collection: undefined;
  ProductDetail: ProductDetailParams;
};

const CollectionNativeStack = createNativeStackNavigator();

export const CollectionNavigator = () => {
  return (
    <ProductContextProvider>
      <CollectionNativeStack.Navigator
        initialRouteName="CollectionScreen"
        screenOptions={{headerShown: false}}>
        <CollectionNativeStack.Screen
          name="CollectionScreen"
          component={CollectionScreen}
        />
        <CollectionNativeStack.Screen
          name="ProductDetail"
          component={ProductDetail}
        />
      </CollectionNativeStack.Navigator>
    </ProductContextProvider>
  );
};
