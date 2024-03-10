<template>
  <div class="navbar bg-base-100 border-b-4">
    <div class="navbar-start">

      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->
          <label tabindex="0" class="btn btn-ghost btn-circle" for="my-drawer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <!-- <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label> -->
        </div> 
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul tabindex="0" class="menu p-4 w-80 h-full bg-base-200 text-base-content shadow  rounded-box ">
            <template v-if="authenticated">
              <li><NuxtLink :to="'/'+homeLink">Homepage</NuxtLink></li>
              <li><NuxtLink @click="authStore.logout()">Logout</NuxtLink></li>
            </template>
            <template v-else>
              <li><NuxtLink to="/login">Login</NuxtLink></li>
              <li><NuxtLink to="/register">Register</NuxtLink></li>
            </template>
          </ul>
        </div>
      </div>
      <!-- <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <template v-if="authenticated">
            <li><NuxtLink :to="'/'+homeLink">Homepage</NuxtLink></li>
            <li><NuxtLink @click="authStore.logout()">Logout</NuxtLink></li>
          </template>
          <template v-else>
            <li><NuxtLink to="/login">Login</NuxtLink></li>
            <li><NuxtLink to="/register">Register</NuxtLink></li>
          </template>
        </ul>
      </div> -->
    </div>
    <div class="navbar-center">
      <nuxt-link class="btn btn-ghost normal-case text-xl" to="/">Tiflicare</nuxt-link>
    </div>
    <div class="navbar-end">
      <label class="swap swap-rotate ">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox"  @click="changeTheme()"/>
        
        <!-- sun icon -->
        <svg class="swap-on fill-current w-10 h-10 flex items-center justify-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35 ">
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
        </svg>
        
        <!-- moon icon -->
        <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35 "><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        
      </label>
      <!-- <button class="btn btn-ghost btn-circle">
          <input type="checkbox" class="toggle toggle-sm"  @click="changeTheme()" />
      </button> -->
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  setup() {
    let {$pb} = useNuxtApp()
    const authStore = useAuthStore()
    const baseStore = useBaseStore()
    let homeLink = computed( () => {
       return  authStore.getAuthPath()
    })
    let changeTheme = function(){
      let theme = baseStore.theme
      // if(theme == 'light'){
      //   baseStore.theme = 'dark'
      // }else{
      //   baseStore.theme = 'light'
      // }
    }
    onMounted(() => {
      authStore.getAuthUser()
    })
    let logout = function(){
      authStore.logout()
    }
    let authenticated = computed(() => {
      return !!authStore.authUser
    })
    return { authStore, changeTheme, authenticated, homeLink, logout }
  }
})
</script>
