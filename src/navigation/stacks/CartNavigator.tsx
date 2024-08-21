import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CartScreen} from '../../screens/Cart/CartScreen';

export type CartNativeStackParamList = {
  Cart: undefined;
};

const CartNativeStack = createNativeStackNavigator();

export const CartNavigator = () => {
  return (
    <CartNativeStack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{headerShown: false}}>
      <CartNativeStack.Screen name="CartScreen" component={CartScreen} />
    </CartNativeStack.Navigator>
  );
};
