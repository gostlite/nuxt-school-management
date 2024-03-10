<template>
  <div class="p-[16px] md:p-[40px] bg-[#f9f9f9]">
    <div class="flex flex-col gap-[32px]">
      <div class="flex flex-wrap justify-between">
        <div class="flex gap-2 items-center">
          <ph-note-pencil :size="20" weight="regular" fill="black" />
          <h1 class="title">Document</h1>
        </div>
        <div class="flex gap-[34px]">
          <div class="btntext flex gap-2 items-center bg-success">
            <ph-funnel :size="20" weight="fill" fill="white" />
            <h2>Filters</h2>
          </div>
          <div
            @click="openModal"
            class="btntext flex gap-2 items-center bg-success cursor-pointer"
          >
            <h2>Upload Document</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- table -->
    <div class="w-full">
      <div class="container sm:max-w-full">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Student Name</th>
              <th>Document Name</th>
              <th>Document Type</th>
              <th>Date Uploaded</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="index in 4" :key="index">
              <td><ph-file-text :size="24" weight="fill" fill="#0057FF" /></td>
              <td>Alex Samuel</td>
              <td>School Cert</td>
              <td>Jpeg</td>
              <td>30/04/2022</td>
              <td>
                <ph-pencil-simple :size="21" weight="fill" fill="#039800" />
              </td>
              <td>
                <ph-trash-simple :size="21" weight="fill" fill="#DE1818" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- upload modal -->
  <AdminUploadmodal v-if="showuploadmodal" :close-modal="closeModal" />
</template>

<script setup>
import {
  PhPencilSimple,
  PhTrashSimple,
  PhNotePencil,
  PhFunnel,
  PhFileText,
} from "@phosphor-icons/vue";
definePageMeta({
  layout: "admin",
});

const showuploadmodal = ref(false);

const openModal = () => {
  showuploadmodal.value = true;
};

const closeModal = () => {
  showuploadmodal.value = false;
};
</script>

<style scoped>
.container {
  background: #fff;
  margin-top: 20px;
  min-height: 500px;
  overflow-x: auto;
}
.title {
  color: #001121;
  font-family: Sora;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.btntext {
  padding: 12px 16px;
  border-radius: 5px;
}
.btntext h2 {
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
table {
  width: 100%;
  margin-top: 30px;
}
thead tr {
  width: max-content;
}
tr:nth-child(even) {
  background-color: #f6f6f6;
}
thead tr th {
  color: #0f0f0f;
  font-family: Sora;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 10px;
}
td {
  color: #494949;
  font-family: Sora;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px;
  text-align: center;
}
@media screen and (max-width: 500px) {
  .container {
    max-width: 350px;
  }
}
@media screen and (max-width: 400px) {
  .container {
    max-width: 250px;
  }
}
</style>
