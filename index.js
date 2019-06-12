/*!
  © Nick Freear, 12-June-2019 | License: MIT.
*/

((WIN, DOC) => {
  'use strict';

  const APP_ELEMENT = '#app';
  const REJECT_TIMEOUT = 8 * 1000;

  WIN.OneLine = () => {
    let promise = new Promise((resolve, reject) => {
      let sc = DOC.createElement('script');

      sc.src = 'https://unpkg.com/vue/dist/vue.js';

      sc.onload = () => {
        resolve(mountVue);
      };

      DOC.head.appendChild(sc);

      WIN.setTimeout(() => { reject(Error("OneLine: script 'onload' failed ?!")); }, REJECT_TIMEOUT);
    });

    return promise;
  };

  function mountVue () {
    const Vue = WIN.Vue;

    let vm = new Vue({

      el: APP_ELEMENT,

      data () {
        return {
          DEFAULT_COUNT: 10
        // items: [],
        // reverseItems: [],
        };
      },

      methods: {
        items (count) {
          count = parseInt(count || this.DEFAULT_COUNT);
          let theItems = [];

          const MAKE_ARRAY = Array.from(Array(count).keys());
          MAKE_ARRAY.forEach((name, id) => theItems.push({ id, name }));

          console.warn('App.items:', theItems);
          return theItems;
        },

        reverseItems (count) {
          return this.items(count).reverse();
        },

        appdebug (...values) { console.warn(...values); }
      },

      mounted () {
        console.warn('App.mounted:', Vue.version, Vue.config, this);
      }
    });

    return vm;
  } // End: mountVue.
})(window, window.document);
