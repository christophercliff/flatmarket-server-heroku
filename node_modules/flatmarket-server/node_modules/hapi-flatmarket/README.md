Made possible By [JSON Expert](https://json.expert/), the easiest way to create a web-ready API.

---

# hapi-flatmarket

[![Build Status](https://circleci.com/gh/christophercliff/hapi-flatmarket.svg?style=shield)](https://circleci.com/gh/christophercliff/hapi-flatmarket)
[![codecov.io](http://codecov.io/github/christophercliff/hapi-flatmarket/coverage.svg?branch=master)](http://codecov.io/github/christophercliff/hapi-flatmarket?branch=master)

A [hapi](http://hapijs.com/) plugin for [flatmarket](https://json.expert/flatmarket/).

## Installation

```
npm install hapi-flatmarket
```

## Usage

```js
var Flatmarket = require('hapi-flatmarket')

server.register({
  register: Flatmarket,
  options: options,
}, function (err) {})
```

### **`options`** `Object`

- **`corsOrigins`** `[String]`

    Sets the [CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) for your routes. Default `['*']`.

- **`schemaUri`** `String`

    The URI for the [flatmarket schema](https://github.com/christophercliff/flatmarket-schema). Required.

- **`stripeSecretKey`** `String`

    The [Stripe secret key](https://support.stripe.com/questions/where-do-i-find-my-api-keys). Required.

## Contributing

See [CONTRIBUTING](https://github.com/christophercliff/flatmarket/blob/master/CONTRIBUTING.md).

## License

See [LICENSE](https://github.com/christophercliff/flatmarket/blob/master/LICENSE.md).
