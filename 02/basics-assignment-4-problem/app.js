const app = Vue.createApp({
  data() {
    return {
      userInput: null,
      toggled: 'visible',
      inline: null
    }
  },
  methods: {
    toggle() {
      if (this.toggled === 'visible') this.toggled = 'hidden';
      else this.toggled = 'visible';
    }
    
  },
});

app.mount('#assignment');