import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CollectionScreen} from '../screens/CollectionScreen/CollectionScreen';
import {CartScreen} from '../screens/CartScreen/CartScreen';
import type {NavigatorScreenParams} from '@react-navigation/native';

type TabNavigationList = {
  Collection: NavigatorScreenParams<undefined>;
  Cart: NavigatorScreenParams<undefined>;
};

const Tab = createBottomTabNavigator<TabNavigationList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Collection" component={CollectionScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};
