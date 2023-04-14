import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/appconfig/redux/store';
import Wrapper from './src/appconfig/router/Wrapper';

const App = () => {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
};

export default App;
