<template>
  <div>
    <active-user :username="name" :userage="age"></active-user>
    <user-data @set-data="setData" ></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: ''
    }
  },
  methods: {
    setData(name, age) {
      this.name = name;
      this.age = age;
    }
  },
};
</script>
