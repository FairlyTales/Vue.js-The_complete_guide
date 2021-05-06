// return random number between min & max
function getRandomDmg(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0
    };
  },

  methods: {
    attack(target) {
      switch (target) {
        case 'player':
          this.playerHealth -= getRandomDmg(8, 16);
          this.currentRound++;
          break;
        case 'monster':
          this.monsterHealth -= getRandomDmg(5, 12);
          this.attack('player');
          break;
      }
      // console.log(this.playerHealth, this.monsterHealth);
    },
    specialAttack(target) {
      switch (target) {
        case 'player':
          this.playerHealth -= getRandomDmg(8, 16);
          this.currentRound++;
          break;
        case 'monster':
          this.monsterHealth -= getRandomDmg(12, 20);
          this.attack('player');
          break;
      }
      console.log(this.playerHealth, this.monsterHealth);
    },
    healPlayer() {
      const healValue = getRandomDmg(10,20);

      if(this.playerHealth + healValue > 100) this.playerHealth = 100;
      else this.playerHealth += healValue;

      this.attack('player');

      this.currentRound++;
    },
    surrender() {
      console.log('you lost, lol');
    }

  },

  computed: {
    playerHealthBar() {
      return {width: this.playerHealth + '%'}
    },
    monsterHealthBar() {
      return {width: this.monsterHealth + '%'}
    },
    isThirdRound() {
      return this.currentRound % 3 !== 0;
    }
  },

  watch: {
    playerHealth(val) {
      if (val <= 0) console.log('you lost');
    },
    monsterHealth(val) {
      if (val <= 0) console.log('you won');
    }
  }
});

app.mount('#game');