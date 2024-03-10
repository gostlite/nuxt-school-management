<script>
//create signup component
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      role: "",
    };
  },
  methods: {
    signup() {
      this.$emit("signup", {
        email: this.email,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
        role: this.role,
      });
    },
  },
};
</script>

<template>
  //create signup template
  <!-- <div class= -->
</template>
