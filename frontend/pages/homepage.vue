<template>
  <div>
    <flow-form v-bind:questions="questions" v-bind:language="language" @submit="onSubmit" />
  </div>
</template>


<script>
  // Import necessary components and classes
import { FlowForm, QuestionModel, QuestionType, ChoiceOption, LanguageModel } from '@ditdot-dev/vue-flow-form'

export default {
  name: 'Home',
  setup() {
    const authStore = useAuthStore()
    onMounted(() => {
      authStore.getAuthUser()
    })
    return { authStore }
  },
  components: {
    FlowForm
  },
  data() {
    return {
      //write json in reports {abandoned:0,answered:49,answering_machine:39,appointments:0,callsduration:522,callstotal:49,firstname:"manager",id:33162,lastname:"t",leads:0,totaltime:261213,user_id:"9md1mu0cz86p6lz"}{abandoned:0answered:49answering_machine:39appointments:0callsduration:522callstotal:49firstname:"manager"id:33162lastname:"t"leads:0totaltime:261213user_id:"9md1mu0cz86p6lz"}
      language: new LanguageModel({
        // Your language definitions here (optional).
        // You can leave out this prop if you want to use the default definitions.
      }),
      questions: [
        // QuestionModel array
        new QuestionModel({
          id: 'info-1',
          title: 'Welcome',
          type: QuestionType.SectionBreak,
          subtitle: 'Sounds like a winning framework! 😉',
          description:"Here's a description of the form.",
          html: '<p>Describe Something more</p>',
          content: 'Get introduction Information before the user \n fills in the form',
        }),
        new QuestionModel({
          title: 'Question',
          type: QuestionType.MultipleChoice,
          options: [
            new ChoiceOption({
              label: 'Answer'
            }),
            new ChoiceOption({
              label: 'Answer B'
            }),
            new ChoiceOption({
              label: 'Answer C'
            })
          ]
        })
      ]
    }
  },
  methods: {
    onSubmit:function (questionList) {
      // Handle submit event.
      // send info to your server
      fetch(url, {
        method: 'POST',
        body: questionList
      })
    },
    
  },
  mounted() {
      let call = async ()=> {
        // setTimeout of 500 milliseconds
        await new Promise(resolve => setTimeout(resolve, 100));
        this.authStore.redirect()
      }
      call()
    },
  }
</script>

<style scoped>
  /* Import Vue Flow Form base CSS */
   @import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
  /* Import one of the Vue Flow Form CSS themes (optional) */
  /* @import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css'; */
  /* @import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
  @import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; 
</style>