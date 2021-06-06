const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue : ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
      // console.log(this.enteredGoalValue);
    },
    reset() {
      this.goals = [];
      this.enteredGoalValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  },
});

app.mount('#user-goals');
