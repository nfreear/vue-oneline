/*!
  © Nick Freear, 12-June-2019 | License: MIT.
*/

((WIN, DOC) => {
  'use strict';

  const DEFAULTS = {
    el: '#app',
    vuejs: 'https://unpkg.com/vue/dist/vue.js',
    timeout: 6 * 1000,
    itemCount: 10
  };

  let CFG = {};

  WIN.OneLine = (options) => {
    CFG = Object.assign(DEFAULTS, options);

    let promise = new Promise((resolve, reject) => {
      let sc = DOC.createElement('script');

      DOC.body.appendChild(sc);

      sc.onload = () => resolve(mountVue);
      sc.src = CFG.vuejs;

      WIN.setTimeout(() => reject(Error("OneLine: script 'onload' failed.")), CFG.timeout);
    });

    return promise;
  };

  function mountVue () {
    const Vue = WIN.Vue;

    let vm = new Vue({

      el: CFG.el,

      data () {
        return {
          itemCount: CFG.itemCount
          // items: [],
          // reverseItems: [],
        };
      },

      computed: {
        items () {
          let theItems = [];

          const MAKE_ARRAY = Array.from(Array(this.itemCount).keys());
          MAKE_ARRAY.forEach((name, id) => theItems.push({ id, name }));

          console.debug('OneLine.items:', theItems);
          return theItems;
        },

        reverseItems () {
          return this.items.reverse();
        }
      },

      methods: {
        oldebug (...values) { console.warn(...values); }
      },

      mounted () {
        console.debug('OneLine.mounted:', Vue.version, Vue.config, CFG, this);
      }
    });

    return vm;
  } // End: mountVue()

  console.debug('OneLine: end');
})(window, window.document);
