<template>
  <li>
    <h2>
      {{ friend.name }}
    </h2>
    <button @click="toggleDetails">Show detail</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <b>Phone:</b>
        {{ friend.phone}}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'id',
        name: 'name',
        phone: '1231 231 2312',
        email: 'asda@sald.com'
      }
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
}
</script>
