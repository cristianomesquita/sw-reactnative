import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

export default () => (
  <View style={{ flex: 1 }}>
    <StatusBar
      backgroundColor="#00d900"
      barStyle="light-content"
    />
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <Routes />
    </Provider >
  </View>
);
