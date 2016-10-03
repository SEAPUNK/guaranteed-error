guaranteed-error
===

[![npm version](https://img.shields.io/npm/v/guaranteed-error.svg?style=flat-square)](https://npmjs.com/package/guaranteed-error)
[![javascript standard style](https://img.shields.io/badge/code%20style-standard-blue.svg?style=flat-square)](http://standardjs.com/)
[![travis build](https://img.shields.io/travis/SEAPUNK/guaranteed-error/master.svg?style=flat-square)](https://travis-ci.org/SEAPUNK/guaranteed-error)
[![coveralls coverage](https://img.shields.io/coveralls/SEAPUNK/guaranteed-error.svg?style=flat-square)](https://coveralls.io/github/SEAPUNK/guaranteed-error)
[![david dependencies](https://david-dm.org/SEAPUNK/guaranteed-error.svg?style=flat-square)](https://david-dm.org/SEAPUNK/guaranteed-error)
[![david dev dependencies](https://david-dm.org/SEAPUNK/guaranteed-error/dev-status.svg?style=flat-square)](https://david-dm.org/SEAPUNK/guaranteed-error)

Fixes up error objects, and converts plain strings to error instances.

`npm install guaranteed-error`

---

```js
try {
  doSomething()
} catch (err) {
  // err === 'something broke' (not an Error instance)
  err = guaranteedError(err)
  /* err is now an Error instance, with the following stack:
Error: something broke
    at <unknown>
  */
}
```
