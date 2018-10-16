Object.freeze(new Vue({
  el: '#app',
  delimiters: ["{(", ")}"],
  data: {
      a: 10,
      b: 'wow'
  },
  computed: {
    output: function() {
      return this.a *2;
   }
  }
}))