/*!
  NDF, 12-June-2019.
*/

((W, D) => {

  let sc = D.createElement('script')

  sc.src = 'https://unpkg.com/vue/dist/vue.js';
  sc.onload = () => {

    /* W.Vue.component('TestItems', {
      template: '<test-items><slot></slot></test-items>',

      mounted () {
        console.debug('TestItems.mounted:', this)
      },
    }) */

    let vm = new W.Vue({
      el: '#app',

      data () { return {
        DEFAULT_COUNT: 10,
        // items: [],
        // reverseItems: [],
      }},

      computed: { },

      methods: {
        items (count) {
          count = parseInt(count || this.DEFAULT_COUNT)
          let theItems = [];

          const MAKE_ARRAY = Array.from(Array(count).keys())
          MAKE_ARRAY.forEach((name, id) => theItems.push({ id, name }))

          console.warn('App.theItems:', theItems);
          return theItems;
        },

        reverseItems (count) {
          return this.items(count).reverse();
        },

        appdebug (...values) { console.warn(values) },
      },

      mounted () {
        // Vue.nextTick(() => this.setupItems())

        console.warn('App.mounted:', this, Vue.config)
      },
    })
  }

  D.body.appendChild(sc)

})(window, window.document)
