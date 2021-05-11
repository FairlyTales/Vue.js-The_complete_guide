<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavourite">favourite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: String,
    emailAddress: String,
    isFavourite: {
      type: String,
      required: false,
      default: '0'
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      isFavouriteData: this.isFavourite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      this.isFavouriteData = !this.isFavouriteData;
    }
  }
};
</script>
