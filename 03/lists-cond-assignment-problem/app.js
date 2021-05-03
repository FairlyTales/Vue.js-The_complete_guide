const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredItem: '',
      listShown: true
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredItem);
      this.enteredItem = '';
    },
    toggle() {
      this.listShown = !this.listShown;
    }
  },
  computed: {
    buttonText() {
      return this.listShown ? 'Hide' : 'Show';
    }
  }
});

app.mount('#assignment');