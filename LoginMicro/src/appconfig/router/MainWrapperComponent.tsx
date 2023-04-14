import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CustomMicroStackNaviagtor from './CustomMicroStackNaviagtor';

const MainWrapperComponent = () => {
  return (
    <NavigationContainer>
      <CustomMicroStackNaviagtor />
    </NavigationContainer>
  );
};

export default MainWrapperComponent;
