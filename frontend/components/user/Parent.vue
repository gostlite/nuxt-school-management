<template>
  <div class="container mx-auto p-4 md:col-span-2 overflow-x">
    <!-- Use md:col-span-1 for the first column -->
    <h1 class="text-2xl font-bold mb-4">Parent Details</h1>
    <div class="w-full bg-white shadow-md rounded-lg overflow-scroll">
      <div class="table-header-group bg-gray-200 text-gray-600">
        <div class="table-row">
          <div class="table-cell py-2 px-4">Student Id</div>
          <div class="table-cell py-2 px-4">Student Name</div>
          <div class="table-cell py-2 px-4">Parent Name</div>
          <div class="table-cell py-2 px-4">Parent email</div>
          <div class="table-cell py-2 px-4">Parent Phone</div>
          <div class="table-cell py-2 px-4"></div>
          <div class="table-cell py-2 px-4"></div>
        </div>
      </div>
      <div class="table-row-group text-gray-600">
        <!-- Loop through your student data and populate the table rows -->
        <div
          v-for="(student, index) in students"
          :key="index"
          class="table-row"
          :class="{ 'alternate-row': index % 2 === 1 }"
        >
          <div class="table-cell py-2 px-4 text-center">{{ student.id }}</div>
          <div class="table-cell py-2 px-4 text-center">
            {{ student.first_name }} {{ student.last_name }}
          </div>
          <div class="table-cell py-2 px-4 text-center">
            {{ student.profiles.first_name }} {{ student.profiles.last_name }}
          </div>
          <div class="table-cell py-2 px-4 text-center">{{ student.profiles.email }}</div>
          <div class="table-cell py-2 px-4 text-center">{{ student.profiles.phone }}</div>
          <div class="table-cell py-2 px-4 text-center cursor-pointer">
            <ph-pencil-simple
              @click="showmodal(student.id)"
              :size="20"
              weight="fill"
              class="text-[#039800]"
            />
          </div>
          <div class="table-cell py-2 px-4 text-center cursor-pointer">
            <ph-trash
              @click="showdeletemodal"
              :size="20"
              weight="fill"
              class="text-[#DE1818]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <UserEditprofileparent
    v-if="edit"
    :hide-modal="hidemodal"
    :user="userdetail"
    :queryId="queryId"
    :queryName="queryName"
  />
  <UserDeleteprofileparent :hidemodal="hidedeletemodal" v-if="deletemodal" />
</template>

<script setup>
import { PhPencilSimple, PhTrash } from "@phosphor-icons/vue";
import { ref } from "vue";
const edit = ref(false);
const deletemodal = ref(false);
const userdetail = ref("");

const showmodal = (id) => {
  edit.value = true;
  userdetail.value = id;
};
const showdeletemodal = (id) => {
  deletemodal.value = true;
};
const hidemodal = () => {
  edit.value = false;
};
const hidedeletemodal = () => {
  deletemodal.value = false;
};

const school_client = useSchoolStore();

const props = defineProps({
  queryId: Number,
  queryName: String,
});
const students = await school_client.getParent_from(
  props.queryName,
  props.queryId
);
</script>

<style scoped>
.alternate-row {
  background-color: lightgray; /* Set the background color for alternate rows here */
}
</style>
