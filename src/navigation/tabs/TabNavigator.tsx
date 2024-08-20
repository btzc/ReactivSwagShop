import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CartScreen} from '../../screens/CartScreen/CartScreen';
import type {NavigatorScreenParams} from '@react-navigation/native';
import {
  CollectionNativeStackParamList,
  CollectionNavigator,
} from '../stacks/CollectionNavigator';

type TabNavigationList = {
  Collection: NavigatorScreenParams<CollectionNativeStackParamList>;
  Cart: NavigatorScreenParams<undefined>;
};

const Tab = createBottomTabNavigator<TabNavigationList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Collection" component={CollectionNavigator} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};
