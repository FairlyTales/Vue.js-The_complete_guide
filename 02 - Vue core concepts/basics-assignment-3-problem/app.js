const app = Vue.createApp({
  data() {
    return {
      result: 0
    }
  },
  computed: {
    computedValue() {
      if(this.result < 37) return 'Not yet';
      else if(this.result > 37) return '2 much';
      else return 'Yep!';
    }
  },
  watch: {
    result() {
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    }
  },
  methods: {
    addFive() {
      this.result += 10;
    },
    addOne() {
      this.result += 1;
    }
  },
});

app.mount('#assignment');