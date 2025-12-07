# stylelint-config-pepelsbey

My [Stylelint](https://stylelint.io/) config.

## Installation

```bash
npm install --save-dev stylelint-config-pepelsbey
```

This config requires the following peer dependencies:

- `stylelint`
- `stylelint-order`

If you don’t have them installed:

```bash
npm install --save-dev stylelint stylelint-order
```

## Usage

Add the config to your `stylelint.config.js`:

```js
export default {
	extends: ['stylelint-config-pepelsbey'],
};
```

Or in `stylelint.config.js`:

```js
import config from 'stylelint-config-pepelsbey';

export default config;
```

## License

MIT
