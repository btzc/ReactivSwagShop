import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CartScreen} from '../../screens/Cart/CartScreen';
import type {NavigatorScreenParams} from '@react-navigation/native';
import {
  CollectionNativeStackParamList,
  CollectionNavigator,
} from '../stacks/CollectionNavigator';
import {ProductContextProvider} from '../../data/context/products/ProductContext';

type TabNavigationList = {
  Collection: NavigatorScreenParams<CollectionNativeStackParamList>;
  Cart: NavigatorScreenParams<undefined>;
};

const Tab = createBottomTabNavigator<TabNavigationList>();

export const TabNavigator = () => {
  return (
    <ProductContextProvider>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Collection" component={CollectionNavigator} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </ProductContextProvider>
  );
};
