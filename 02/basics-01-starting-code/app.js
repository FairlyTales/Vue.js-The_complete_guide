const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'L0L',
      courseGoalB: 'KEK',
      courseGoalC: '<s>HAHA</s>',
      link: 'https://vuejs.org'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) return this.courseGoalA;
      else return this.courseGoalB;
    }
  },
});

app.mount('#user-goal');


