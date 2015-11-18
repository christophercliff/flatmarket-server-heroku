Made possible By [JSON Expert](https://json.expert/), the easiest way to create a web-ready API.

---

# flatmarket-server

[![Build Status](https://circleci.com/gh/christophercliff/flatmarket-server.svg?style=shield)](https://circleci.com/gh/christophercliff/flatmarket-server)
[![codecov.io](http://codecov.io/github/christophercliff/flatmarket-server/coverage.svg?branch=master)](http://codecov.io/github/christophercliff/flatmarket-server?branch=master)

A standalone web server for [flatmarket](https://json.expert/flatmarket/).

## Installation

```
npm install flatmarket-server
```

## Usage

The server requires the following environment variables:

```
CORS_ORIGINS=["https://your-origin.com"]
PORT=8000
SCHEMA_URI=https://your-origin.com/flatmarket.json
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Then run:

```sh
$ node ./node_modules/flatmarket-server/lib/start
```

## Contributing

See [CONTRIBUTING](https://github.com/christophercliff/flatmarket/blob/master/CONTRIBUTING.md).

## License

See [LICENSE](https://github.com/christophercliff/flatmarket/blob/master/LICENSE.md).
