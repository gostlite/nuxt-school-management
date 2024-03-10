<template>
  <div>
    <form @submit.prevent="login">
      <div class="grid grid-cols-3 gap-4">
        <div class="mx-auto col-span-3">
          <h2 class="text-2xl font-semibold leading-tight mb-5 text-center">
            Login
          </h2>
        </div>
        <div class="col-span-4 form-control">
          <label class="label block text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="form-input block w-full mt-1 input input-bordered"
            id="email"
            type="email"
            v-model="email"
          />
        </div>
        <div class="col-span-4 form-control">
          <label class="label" for="password"> Password </label>
          <input
            class="form-input block w-full mt-1 input input-bordered"
            id="password"
            type="password"
            v-model="password"
          />
        </div>
        <div class="col-span-4">
          <button class="btn btn-primary" @click="login">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$emit("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
