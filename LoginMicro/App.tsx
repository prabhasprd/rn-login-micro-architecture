import React from 'react';
import MainWrapperComponent from './src/appconfig/router/MainWrapperComponent';
import minorAppStore from './src/appconfig/microRedux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={minorAppStore}>
      <MainWrapperComponent />
    </Provider>
  );
};

export default App;
