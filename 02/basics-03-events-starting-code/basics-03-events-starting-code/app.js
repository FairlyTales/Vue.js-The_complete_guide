const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: 'default name',
      confName: ''
    };
  },
  computed: {
    fullNameComputed() {
      console.log('computed executed');
      if(this.name === 'default name') {
        return this.name;
      }
      return this.name + ' ' + 'asdkahsdla';
    }
  },
  methods: {
    counterUpdate(action) {
      switch(action) {
        case '+':
          this.counter++;
          break;
        case '-':
          this.counter--;
          break;
      }
    },
    setName(event) {
      // this.name = event.target.value;
    },
    submit() {
      console.log('lol');
    },
    confirm() {
      this.confName = this.name;
    },
    outputFullName() {
      //! methods in {{}} are executed EVERY (!) time any of the elements are updated!
      console.log('method executed');
      if(this.name === 'default name') {
        return this.name;
      }
      return this.name + ' ' + 'asdkahsdla';
    }
  },
});

app.mount('#events');
