
<template>
  <div>
    <div class="grid md:grid-cols-5 gap-2 m-2">
      <button class="btn col-span-2" @click="open">Select File</button>
      <button class="btn col-span-2" @click="upload(files)">Upload</button>
      <span class="" @click="reset" v-if="!!files?.length">❌</span>
    </div>
    <div class="grid gap-3 m-2" v-if="!!files?.length">
      <input v-model="fileInfo.name" name="file_name" type="text" class="form-control input input-sm" placeholder="File Name" />
      <textarea v-model="fileInfo.description" name="file_description" type="text" class="form-control textarea textarea-sm" placeholder="File Description" />
      <div class="avatar" v-for="file in files" :key="file.id">
        <div class="w-24 rounded">
          <img :src="createObjectURL(file)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useFileDialog } from '@vueuse/core'
// import {useNuxtApp} from 'vue'
// import {$pb} from 'useNuxtApp'

export default {
  setup(props,{emit}) {

    const fileInfo = ref({name: '', description: ''})
    const { files, open, reset, onChange } = useFileDialog()
    // create object url from file
    const createObjectURL = (file) => {
      return URL.createObjectURL(file)
    }
    // const file = useFileDialog()
    const upload = async (files) => {
      // list fileList objects
      const { $pb } = useNuxtApp()
      const formData = new FormData();
      for (let file of files) {
        formData.append('file', file);
      }
      formData.append('user', $pb.authStore.model.id)
      formData.append('name', fileInfo.value.name)
      formData.append('description', fileInfo.value.description)
      const createdRecord =  await $pb.collection('documents').create(formData);
      emit('file-uploaded', createdRecord)
      reset()
    }
    onChange((files) => {
      /** do something with files */
    })
    return {
      files,
      open,
      reset,
      onChange,
      upload,
      createObjectURL,
      fileInfo
    }
  },
}
</script>