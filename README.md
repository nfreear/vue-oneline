
[![npm][npm-icon]][npm]

# vue-oneline

A one-line Javascript include to mount a [Vue.js][] app,
and quickly hack single file prototypes.

## Usage

```html
<!doctype html>

<div id="app">
    <hello-world />
</div>

<script src="https://unpkg.com/vue-oneline"></script>

<script>
  OneLine().then(done => {

    Vue.component('hello-world', {
      template: '<p> Hello World! </p>'
    })

    done() // Important: call 'done()' at the end of your Vue.js hack!
  })
</script>
```

## Implementation

 * Uses `promises` and `arrow` functions (`=>`)

---
License: [MIT][]

[Vue.js]: https://vuejs.org/
[npm]: https://npmjs.com/package/vue-oneline
[npm-icon]: https://img.shields.io/npm/v/vue-oneline.svg
[MIT]: http://nfreear.mit-license.org/
