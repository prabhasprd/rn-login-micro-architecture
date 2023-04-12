import React from 'react';
import {Federated} from '@callstack/repack/client';

export const MicroApplication = React.lazy(() =>
  Federated.importModule('LoginMicro', './App'),
);
