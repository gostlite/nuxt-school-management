<template>
   <div class="grid md:grid-cols-2 grid-cols-1 gap-8" id="comments">
    <div class="col-span-2 form-control md:w-1/2 md:mx-auto">
      <label class="label text-sm font-bold mb-2" for="username">
        Select User
      </label>
      <select class="select select-primary block w-full mt-1" id="user" v-model="selected_user">
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.first_name }} {{ user.last_name }}</option>
      </select>
    </div>
    <add-note @add-note="addNote" class="mt-5 col-span-2 md:col-span-1" />
    <list-notes :comments="comments" class="mt-5 col-span-2 md:col-span-1" />
  </div>
</template> 

<script>
// make this a component all values are props and emit events to parent
// import ReportTable from '@/components/ReportTable.vue'
import AddNote from '@/components/AddNote.vue'
// import ListNotes from '@/components/ListNotes.vue'

export default {
  name: 'Notes',
  components: {
    // ReportTable,
    AddNote,
    // ListNotes,
  },
  data() {
    return {
      selected_user: '',
      comments: [],
      users: [],
      auth_user: null,
    }
  },
  watch: {
    selected_user: function (val) {
      this.getNotes(val)
    },
    period: function (val) {
      this.getReports(val)
    }
  },
  computed: {
    getUserFilter(){
      if(this.auth_user?.expand?.role?.name == "Agent") return `id = '${this.selected_user}'`
      if(this.auth_user?.expand?.role?.name == "Manager") return `role.name != 'Owner'`
      if(this.auth_user?.expand?.role?.name == "Owner") return `id != '${this.auth_user.id}'`
    }
  },
  methods: {
    async addNote({comment}){
      const sdata = {
        "approved": false,
        "created_by": this.$pb.authStore.model.id,
        "user_id": this.selected_user,
        comment
      };
		  let savedComment = await this.$pb.collection('comments').create(sdata)
      await this.getNotes(this.selected_user)
    },
    async getNotes(user_id){
      let {items} = await this.$pb.collection('comments').getList(1,50,{
        filter:`user_id = '${user_id}'`,
        expand:`created_by`,
        sort:`-created`
      })
      this.comments = items
    },
    async getUsers(){
      let filter = this.getUserFilter
      let {items} = await this.$pb.collection('users').getList(1,50,{
        filter: filter,
      })
      this.users = items
    }
  },
  mounted: async function() {
    //create a promise to wait for the users to be loaded
    await new Promise((resolve, reject) => {
        setTimeout(resolve() ,300)
    })
    this.auth_user = this.$pb.authStore.model
    await this.getUsers()
    this.selected_user = this.users[0].id
  },
}

</script>

