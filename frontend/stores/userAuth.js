//  user auth store to keep track of the authenticated user

import { defineStore } from "pinia";

export const supabase = useSupabaseClient();

export const Client = defineStore({
  id: "clientstore",
  state: () => {
    return { currentuser: {}, errormessage: "" };
  },
  getters: {
    isSignedIn() {
      //  let supabase = useSupabaseClient()
      //  await supabase.auth.getUser()
      return this.currentuser.name !== null;
    },
  },
  actions: {
    async authLogin(email, password) {
      try {
        let supabase = useSupabaseClient();

        let { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
        if (error) {
          throw new Error(error);
        }
        // const {
        //   data: { user: User },
        // } = await supabase.auth.getUser();
        let user = useSupabaseUser();
        // console.log("this is the supabase value ---------", user.value);
        this.currentuser = user.value; // update current user
        console.log("this is the updated current user", this.currentuser);
        return data;
      } catch (error) {
        console.error(error.message);
        this.errormessage = error.message;
      }
    },

    async userSignup(email, password) {
      try {
        let supabase = useSupabaseClient();

        let {
          data: { user: User },
          error,
        } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (error) {
          throw new Error(error);
        }
        console.log(`this is the user ------ ${User}`);
      } catch (error) {
        console.error(error.message);
        this.errormessage = error.message;
        // return error.message;
      }
    },

    async signOut() {
      let supabase = useSupabaseClient();
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.log(error);
        this.errormessage = error.message;
      }

      navigateTo("/loginview");
    },

    // reset user password
    async resetpassword(email) {
      try {
        let supabase = useSupabaseClient();
        let { data, error } = await supabase.auth.resetPasswordForEmail(email);
        console.log(data);

        if (error) {
          throw new Error(error);
        }
      } catch (error) {
        console.log(error.message);
        this.errormessage = error.message;
      }
    },
    async getUser() {
      let User = await useSupabaseUser()
      this.currentuser = User;
      return User;
    },
    async getUserProfile(){
      let user = await this.getUser()
      // console.log(user.value)
      let {data, error} = await supabase.from('profiles').select('*').eq('id', user.value.id).single()
      if(error){
        console.log(error.message)
        this.errormessage = error.message
      }
      return data
    },
    async getSchool() {
      const user = useSupabaseUser();
      const { id: userid } = user.value;
      const supabase = useSupabaseClient();

      let { data: school_id, error } = await supabase
        .from("user_roles")
        .select("school_id")
        .eq("user_id", userid);

      if (error) {
        this.errormessage = error;
        console.error(error);
      }
      return Object.values(school_id[0])[0];
      // return school_id[0][0];
    },
    async getClass() {
      // const user = useSupabaseUser();
      const supabase = useSupabaseClient();
      const adminSchool = await this.getSchool();
      console.log("this is admin .....", adminSchool);
      if (this.errormessage) {
        this.errormessage = "";
        return;
      }
      // const { id: userid } = user.value;

      let { data: classes, error } = await supabase
        .from("classes")
        .select("name")
        .eq("school_id", adminSchool);
      if (error) {
        this.errormessage = error.message;
        return;
      }

      return classes;
    },
  },
});
