// https://nuxt.com/docs/api/configuration/nuxt-config
// require("dotenv").config();
// import fetch from "cross-fetch";

export default defineNuxtConfig({
  components: ["~/components"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",

    "@vueuse/nuxt",
    // "nuxt-svgo",
    "@nuxt/image",
    "@nuxtjs/supabase",
    // "nuxt-stripe-module",
  ],

  // stripe: {
  //   publishableKey:
  //     "pk_test_51O9xPgD6oBtJgmWFKTd0NSnRLsbB8HzXMnb8Todx1sPVXIMkRZ5rdAuRAFK1wKW2aZLxhQZkWNmyZ6hwww86FehJ00QPqoJKPR",
  //   // Add any additional configuration options here
  // },
  googleFonts: {
    families: {
      Lato: {
        wght: [100, 400, 700],
      },
    },
  },
  imports: {
    dirs: ["stores", "composables"],
  },
  devtools: true,
  supabase: {
    redirect: true,
    redirectOptions: {
      login: "/loginview",
      callback: "/afterlogin",
      exclude: [
        "/",
        "/about",
        "/pricing",
        "/createuser",
        "/resetpassword",
        "/beforeupdate",
        // "admin",
        "/teacher",
      ],
    },
    cookieName: "tiflicare",
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
  // Adding the Seo and meta tags

  app: {
    head: {
      title: "Tiflicare",
      meta: [{ name: "description", content: "All about Tiflicare school" }],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          // crossorigin: true,
        },
        // {
        //   href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap",
        //   rel: "stylesheet",
        // },
        // {
        //   href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&family=Sora:wght@300;400;500;600;700;800&display=swap",
        //   rel: "stylesheet",
        // },
        // {
        //   href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
        //   rel: "stylesheet",
        // },
        // {
        //   href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
        //   rel: "stylesheet",
        // },

        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  ssr: false,

  // Add this line
});
