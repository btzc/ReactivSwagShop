import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ProductDetail} from '../../screens/Collection/components/ProductDetail/ProductDetail';
import {CollectionScreen} from '../../screens/Collection/CollectionScreen';

export type CollectionNativeStackParamList = {
  Collection: undefined;
  ProductDetail: undefined;
};

const CollectionNativeStack = createNativeStackNavigator();

export const CollectionNavigator = () => {
  return (
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
  );
};
