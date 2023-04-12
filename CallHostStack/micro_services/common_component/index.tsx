import {View, Text} from 'react-native';
import React, {Suspense} from 'react';
import {MicroApplication} from '..';

const BindingMicroApplication = ({LoadingContent = '', children}: any) => {
  return (
    <Suspense fallback={<Text>{LoadingContent}</Text>}>{children}</Suspense>
  );
};

export default BindingMicroApplication;
