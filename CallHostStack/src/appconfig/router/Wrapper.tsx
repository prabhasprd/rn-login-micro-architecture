import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CustomStackNaviagtor from './CustomStackNaviagtor';

const Wrapper = () => {
  return (
    <NavigationContainer>
      <CustomStackNaviagtor />
    </NavigationContainer>
  );
};

export default Wrapper;
