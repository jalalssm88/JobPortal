import React from 'react';
import { View, Text } from 'react-native';
import MainStack from './src/stacks/';
import NavigationService from './src/services/NavigationServices';
import { Provider } from "react-redux";
import { store } from './src/store/'
 

const App: () => React$Node = () => {
  return (
    <>
        <Provider store={store}>
          <MainStack
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </Provider>
    </>
  );
};

export default App;
