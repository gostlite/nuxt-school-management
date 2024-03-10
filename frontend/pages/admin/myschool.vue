<template>
  <div class="bg-[#f9f9f9] p-5 min-h-screen">
    <div class="my-6 pl-9">
      <h1 class="font-[sora] font-semibold">My Schools</h1>
    </div>
    <div class="bg-white w-full mx-auto p-5">
      <h1 class="font-[roboto] font-[500] py-4">Records</h1>
      <div class="flex items-center gap-6">
        <h1
          @click="updatetable"
          :class="{
            'border-b-[2px] border-[#A508A5]': studentstable,
            'font-[roboto] font-[500] cursor-pointer': true,
          }"
        >
          Students
        </h1>
        <h1
          @click="updatetable"
          :class="{
            'border-b-[2px] border-[#A508A5]': !studentstable,
            'font-[roboto] font-[500] cursor-pointer': true,
          }"
        >
          Teachers
        </h1>
      </div>
      <!-- search boxes -->
      <div class="flex flex-wrap gap-3 my-6">
        <div class="inputbox">
          <input placeholder="Search by ID" type="text" />
        </div>
        <div class="inputbox">
          <input placeholder="Search by Name" type="text" />
        </div>
        <div class="inputbox">
          <input placeholder="Search by Class" type="text" />
        </div>
        <button class="bg-warning text-white rounded-md px-3">Search</button>   
        <nuxt-link to="/admin/register"><button class="bg-[#A508A5] text-white rounded-md px-3 py-1 ">
          Add Teacher
        </button></nuxt-link>
      </div>
      <!-- tables -->
      <AdminStudentstable v-if="studentstable" :studentsData="students" />

      <AdminTeacherstable v-if="!studentstable" :teachersData="teachers" />
    </div>
  </div>
</template>

<script setup>
let studentstable = ref(true)
let updatetable = () =>  studentstable.value = !studentstable.value
const client = Client();
const supabase = useSupabaseClient();
const user = useSupabaseUser();
let schoolStore = useSchoolStore();
if (!schoolStore.role.user_id || !schoolStore.school.id || !schoolStore.classes.length > 0 ||!schoolStore.students.length > 0 || !schoolStore.parents.length > 0 || !schoolStore.teachers.length > 0) await schoolStore.init()
let {role , school , classes , students , parents , teachers} = schoolStore
let studentsData = reactive([
        {
          ID: 1,
          Photo: "/assets/img/pana.png",
          Name: "John Doe",
          Gender: "Male",
          Class: "Grade 10",
          Parents: "Alice and Bob Doe",
          Address: "123 Main Street",
          DateOfBirth: "2005-08-15",
        },
        {
          ID: 2,
          Photo: "/assets/img/pana.png",
          Name: "Jane Smith",
          Gender: "Female",
          Class: "Grade 8",
          Parents: "Eve and Charlie Smith",
          Address: "456 Elm Avenue",
          DateOfBirth: "2007-03-22",
        },
        {
          ID: 3,
          Photo: "/assets/img/pana.png",
          Name: "Samuel Johnson",
          Gender: "Male",
          Class: "Grade 9",
          Parents: "Grace and David Johnson",
          Address: "789 Oak Road",
          DateOfBirth: "2006-11-10",
        },
        {
          ID: 4,
          Photo: "/assets/img/pana.png",
          Name: "Olivia Brown",
          Gender: "Female",
          Class: "Grade 11",
          Parents: "Sophia and Ethan Brown",
          Address: "101 Pine Street",
          DateOfBirth: "2004-05-28",
        },
      ])
let teachersData = reactive([
        {
          TeacherID: 1,
          Photo: "/assets/img/pana.png",
          Name: "Alice Johnson",
          Gender: "Female",
          Subject: "Mathematics",
          Email: "alice@example.com",
          PhoneNumber: "123-456-7890",
          Address: "123 Oak Street",
          DateOfBirth: "1985-05-10",
          JoiningDate: "2010-09-15",
          Qualifications: "Masters in Education",
        },
        {
          TeacherID: 2,
          Photo: "/assets/img/pana.png",
          Name: "John Smith",
          Gender: "Male",
          Subject: "Science",
          Email: "john@example.com",
          PhoneNumber: "987-654-3210",
          Address: "456 Elm Avenue",
          DateOfBirth: "1978-12-22",
          JoiningDate: "2005-08-05",
          Qualifications: "Bachelor of Science",
        },
        {
          TeacherID: 3,
          Photo: "/assets/img/pana.png",
          Name: "Mary Davis",
          Gender: "Female",
          Subject: "English",
          Email: "mary@example.com",
          PhoneNumber: "567-890-1234",
          Address: "789 Maple Road",
          DateOfBirth: "1990-04-15",
          JoiningDate: "2015-11-30",
          Qualifications: "Ph.D. in Literature",
        },
        {
          TeacherID: 4,
          Photo: "/assets/img/pana.png",
          Name: "Robert Wilson",
          Gender: "Male",
          Subject: "History",
          Email: "robert@example.com",
          PhoneNumber: "234-567-8901",
          Address: "101 Pine Lane",
          DateOfBirth: "1983-09-28",
          JoiningDate: "2008-06-12",
          Qualifications: "Master of Arts",
        },
      ])

definePageMeta({
  layout: "admin",
});

</script>

<style>
.inputbox {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #838383;
}
.inputbox input {
  background-color: #f8f8f8;
  max-width: 400px;
  padding: 6px;
  outline: none;
}
</style>
