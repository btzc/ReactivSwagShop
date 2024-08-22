import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import type {NavigatorScreenParams} from '@react-navigation/native';
import {
  CollectionNativeStackParamList,
  CollectionNavigator,
} from '../stacks/CollectionNavigator';
import {CartNavigator} from '../stacks/CartNavigator';
import {CartContextProvider} from '../../data/context/cart/CartContext';

type TabNavigationList = {
  Collection: NavigatorScreenParams<CollectionNativeStackParamList>;
  Cart: NavigatorScreenParams<undefined>;
};

const Tab = createBottomTabNavigator<TabNavigationList>();

export const TabNavigator = () => {
  return (
    <CartContextProvider>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Collection" component={CollectionNavigator} />
        <Tab.Screen name="Cart" component={CartNavigator} />
      </Tab.Navigator>
    </CartContextProvider>
  );
};
