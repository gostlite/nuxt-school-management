import { defineStore } from 'pinia'
import {reactive} from 'vue'

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: () => reactive({
    authUser: null,
  }),

  getters: {
    
  },
  actions: {
    getAuthUser() {
      const {$pb} = useNuxtApp()
      this.authUser = $pb.authStore?.model
      if(!this.authUser) return this.logout()
      return this.authUser
    },
    async login(email, password) {
      const {$pb} = useNuxtApp()
      await $pb.collection('users').authWithPassword(email, password, {}, {expand:'role,companies'})
      .then(({record}) => {
        this.authUser = record
        this.getAuthUser()
      }).catch((err) => {
        console.log(err)
      })
      setTimeout(()=> this.redirect(),900)
      return this.authUser
    },
    async redirect(){
      const { $router} = useNuxtApp()
      if(!this.authUser) return $router.push('/login')
      let path = this.getAuthPath()
      return $router.push(`/${path}`)
    },
    getAuthPath(){
      return this.authUser?.expand?.role?.name?.toLowerCase()
    },
    async logout(){
      const {$pb, $router} = useNuxtApp()
      this.authUser = null
      $pb.authStore.clear()
      $router.push('/login')
    }
  },
})
