const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText;
      console.log(this.$refs.userText.value);
    },
  },
  beforeCreate() {
    console.log('before create');
  },
  updated() {
    console.log('updated');
  },
});

app.mount('#app');
