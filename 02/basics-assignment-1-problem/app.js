const app = Vue.createApp({
  data() {
    return {
      name: 'my name',
      age: 10,
      imgLink: 'https://i.redd.it/2w53rr5nw2w61.jpg',
    }
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    },

    randomNumber() {
      return Math.random();
    },
        randomNumber1(a) {
      return a;
    }
  },
});

app.mount('#assignment');