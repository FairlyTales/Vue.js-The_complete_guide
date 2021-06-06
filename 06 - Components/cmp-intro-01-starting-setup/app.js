const app = Vue.createApp({
  data() {
    return {

      friends: [
        {
          id: 'a',
          name: 'b'
        },
        {
          id: 'c',
          name: 'v'
        }
      ]
    };
  }
});

app.component('something-like', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button>Show Details</button>
    <ul>
      <li><strong>Phone:</strong> 01234 5678 991</li>
      <li><strong>Email:</strong> manuel@localhost.com</li>
    </ul>
  </li>

  `,
  data() {
    return {
      detailsVisible: false,
      friend: {id: 'a',
      name: 'b'}
    };
  },
  methods: {
    toggle() {
      this.detailsVisible = !this.detailsVisible;
      console.log('a');
    }
  }
});

app.mount('#app');