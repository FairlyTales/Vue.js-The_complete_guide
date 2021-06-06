<template>
  <div>
    <form @submit.prevent="submitData">
      <label>name<input v-model="name" type="text"/></label>
      <label>age<input v-model="age" type="text"/></label>
      <button>send data</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['set-data'],
  data() {
    return {
      name: '',
      age: ''
    }
  },
  methods: {
    submitData() {
      this.$emit('set-data', this.name, this.age);
      this.name = '';
      this.age = '';
    }
  },
};
</script>
