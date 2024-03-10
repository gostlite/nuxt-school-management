<template>
  <div class="container mx-auto">
    <div class="grid gap-4 mt-20">
      <Notify :notification="notification" class="grid" />

      <Login class="lg:mx-60 sm:mx-20 mx-5" @login="login" />
    </div>
  </div>
  <FooterNav />
</template>

<script>
definePageMeta({
  layout: "login-menu",
});
//add signup component
import Login from "@/components/auth/Login.vue";
import Notify from "@/components/Notify.vue";
import HomeNav from "@/components/HomeNav.vue";
import FooterNav from "@/components/Footer.vue";
export default {
  name: "LoginView",
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  components: {
    Login,
    Notify,
    HomeNav,
    FooterNav,
  },
  data() {
    return {
      auth_user: null,
      notification: {
        show: false,
        message: "",
        type: "",
      },
    };
  },
  methods: {
    async login({ email, password }) {
      //add daisy ui notification to show success or failure
      await this.authStore
        .login(email, password)

        .then((res) => {
          this.notification = {
            show: true,
            message: "Login Successful",
            type: "success",
          };
          console.log(res);
        })
        .catch((err) => {
          this.notification = {
            show: true,
            message: "Login Failed",
            type: "info",
          };
        });
      await setTimeout(() => {
        this.notification.show = false;
      }, 3000);
      // if (this.notification.type == 'success') await this.redirect()
    },
    async redirect() {
      if (!this.$pb.authStore.token) return await this.authStore.redirect();
      this.auth_user = await this.$pb
        .collection("users")
        .getOne(this.$pb.authStore.model.id, { expand: `role,companies` });
      let path = this.auth_user.expand.role.name.toLowerCase();
      this.$router.push(`/${path}`);
    },
  },
  async mounted() {
    if (this.$pb.authStore.token) {
      await this.authStore.redirect();
    }
  },
};
</script>
