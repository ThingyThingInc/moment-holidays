# moment-holidays
Moment.js with support for business days &amp; bank holidays

## Usage

To check if today is a business day, taking holidays into account:
```js
moment().isBusinessDay()
```

To get the next business day, taking holidays into account:
```js
moment().nextBusinessDay()
```

This plugin wraps [moment-business-days](https://github.com/kalmecak/moment-business-days), which wraps [moment](https://momentjs.com/docs/). See those for more info.

## Caveats

The plugin will only load holidays within one year after startup.