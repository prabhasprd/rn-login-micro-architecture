# rn-login-micro-architecture

## Usage

Install dependencies:

```bash
yarn parallel
```

Install pod:

```bash
yarn pod-install
```

Run scripts to execute application:

```bash
yarn start:host & yarn start:LoginMicro
```

To execute application independently

Run scripts to execute host application:

```bash
yarn --cwd <host application> ios
```

```bash
yarn --cwd <host application> android
```

Run scripts to execute Micro application:

```bash
STANDALONE=1 yarn --cwd <micro application> ios
```

```bash
STANDALONE=1 yarn --cwd <micro application> android
```

How to configure @callstack/recall on application (https://re-pack.netlify.app/docs/getting-started).

install dependency

```bash
yarn add -D webpack terser-webpack-plugin babel-loader @callstack/repack
```

Create react-native.config file

inside on this file

```bash
module.exports = {
  commands: require('@callstack/repack/commands')
};
```

Create webpack.config.mjs file

Configure on xcode

```bash
Project navigator => Build Phases => Bundle React Native code and images
export BUNDLE_COMMAND=webpack-bundle
```

Configure Android

on file :

android/app/build.gradle

Paste this code on build.gradle

```bash
bundleCommand = "webpack-bundle"
```
