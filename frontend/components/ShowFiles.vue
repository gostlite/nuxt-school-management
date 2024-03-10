<template>
  <div class="col-span-2">
    <div class="col-span-2">
      <h2 class="text-2xl font-semibold leading-tight my-5">Files</h2>
    </div>
    <div class="grid grid-cols-4 gap-3 content-center" v-if="files?.items?.length">
      <div v-for="file in files.items" :key="file.id" >
        <div class="avatar" >
          <div class="w-24 rounded stack">
            <img :src="getFileUrl(file.id,file.file[0])+'?thumb=100x100'" />
          </div>
        </div>
        <div class="text-md font-bold">{{file.name}}</div>
        <div class="text-sm">{{file.description}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'FileView',
  props: ['files'],
  setup({files}) {
    let baseStore = useBaseStore()
    let items = files.items
    let getFileUrl = (id, filename) => {
      return baseStore.url+`/api/files/documents/${id}/${filename}`
    }
    return {  items, getFileUrl}
  },
})
</script>
