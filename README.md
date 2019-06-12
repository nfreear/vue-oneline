
# vue-oneline

A one-line Javascript include to mount a [Vue.js][],
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

    done()
  })
</script>
```

## Implementation

 * Uses `promises` and `arrow` functions (`=>`)

---
License: [MIT][]

[Vue.js]: https://vuejs.org/
[MIT]: http://nfreear.mit-license.org/
