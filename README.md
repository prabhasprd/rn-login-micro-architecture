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
