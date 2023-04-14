import React from 'react';
import {Federated} from '@callstack/repack/client';

export const MicroApplication = React.lazy(() =>
  Federated.importModule('LoginMicro', './App'),
);

export const ReduxMicroApp = React.lazy(() =>
  Federated.importModule('LoginMicro', './ReduxConfig'),
);

export const MicroAppLogin = React.lazy(() =>
  Federated.importModule('LoginMicro', './LoginAuthScreen'),
);

export const AsyncMicroApp = React.lazy(() =>
  Federated.importModule('LoginMicro', './AsyncMicroApp'),
);

export const MicroAppStackNavigation = React.lazy(() =>
  Federated.importModule('LoginMicro', './MicroStackNav'),
);
