# react-title

[![NPM](https://img.shields.io/npm/v/@benjick/react-title.svg)](https://www.npmjs.com/package/@benjick/react-title) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/benjick/react-title.svg?branch=master)](https://travis-ci.org/benjick/react-title)

## Install

```bash
yarn add @benjick/react-title
```

## Usage

```js
import React from 'react'
import {Provider, Title, useTitle} from '@benjick/react-title'

function MyComponent() {
  useTitle('Contact')
  return <p>Contact us</p>
}

function App() {
  return (
    <Provider title="My website">
      <Title string="About" />
      <MyComponent />
    </Provider>
  )
}
```

> Document title would be `Contact - About - My website`

### Provider
 `<Provider>` needs to wrap any `<Title>`. You can change settings here too

| prop name | type | default | misc |
| ------------- | ------------- | ------------- | ------------- |
| title | string | | |
| append | boolean | `false` | If this is set to true the example would be `My website - About - Contact` |
| divider | string | ` - ` | Change the divider between title fragments

### Title
Adds a title fragment

| prop name | type |
| ------------- | ------------- |
| string | string |


## License

MIT © [benjick](https://github.com/benjick)
