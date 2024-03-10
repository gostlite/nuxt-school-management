// this component has a form to add a note to a user. The user field is a dropdown that is populated by the data prop. and a comment text area with a bitton
<template>
  <div class="">
    <div class="header">
      <h2 class="text-2xl font-semibold leading-tight ">Add Note</h2>
    </div>
    <div class="grid">
      <div class="form-control">
        <label class="label text-sm font-bold mb-2" for="comment">
          Comment
        </label>
        <textarea class="textarea textarea-primary block w-full mt-1" rows="3" placeholder="Enter comment here..." v-model="comment"></textarea>
      </div>
      <div class="form-control">
        <button class="btn btn-primary" @click="addImage">Add Note</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddImage',
  data() {
    return {
      image: ''
    }
  },
  methods: {
    addImage() {
      this.$emit('add-image', {
        comment: this.image
      })
    },
  },
}
</script>