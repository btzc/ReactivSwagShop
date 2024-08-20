import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './navigation/TabNavigator';

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
