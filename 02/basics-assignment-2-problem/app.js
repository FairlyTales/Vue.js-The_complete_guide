const app = Vue.createApp({
  data() {
    return {
      input: 'input',
      input1: 'input'
    };
  },
  methods: {
    showLog() {
      console.log('lol');
    },
    handleInput(event) {
      // console.log(event);
      this.input = event.target.value;
    },
    handleInputOnEnter(event) {
      // console.log(event);
      this.input1 = event.target.value;
    }
  },
});

app.mount('#assignment');