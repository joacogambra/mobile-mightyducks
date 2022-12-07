import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Bottom from './src/Navigations/Bottom'
import {Provider} from 'react-redux'
import { store } from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Bottom/>
    </NavigationContainer>
    </Provider>
  );
}

