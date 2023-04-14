import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CustomBottonTab from './CustomBottonTab';

const Wrapper = () => {
  return (
    <NavigationContainer independent={true}>
      <CustomBottonTab />
    </NavigationContainer>
  );
};

export default Wrapper;
