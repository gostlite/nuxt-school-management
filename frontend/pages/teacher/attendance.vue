<template>
  <div class="container sm:max-w-full p-6">
    <!-- <h1 class="headertitle">Today&apos;s Log Activity</h1> -->
    <div class="flex gap-2 items-center">
      <PhCalendarCheck :size="20" fill="regular" />
      <h1 class="font-[500]">Attendance Record</h1>
    </div>
    <div class="bg-white p-4 mt-4 h-[1000px]">
      <div class="flex items-center justify-between">
        <div>
          <!-- <div class="inputbox flex flex-col">
            <label>class</label>
            <select v-model="selectedClass" @change="handleClassSelection">
              <option value="">Please choose a class</option>
              <option
                v-for="item in classes"
                :key="item.id"
                :value="item"
                default=""
              >
                {{ item.name }}
              </option>
            </select>
          </div> -->
        </div>
        <DatePicker v-model="date" :masks="masks" mode="date">
          <template #default="{ togglePopover }">
            <div @click="togglePopover" class="flex flex-col">
              <p>Date</p>
              <div class="flex gap-2 items-center">
                <PhCalendarBlank :size="23" weight="fill" />
                <p class="date">{{ formatDate(date) }}</p>
              </div>
            </div>
          </template>
        </DatePicker>
      </div>
      <!-- no attendance record -->
      <div
        v-if="studentsInClass === ''"
        class="flex items-center justify-center"
      >
        <div class="flex flex-col items-center justify-center">
          <p
            class="font-[sora] px-2 text-center font-[500] text-[14px] text-success"
          >
            No Records Found
          </p>
          <PhFileSearch :size="60" weight="thin" fill="#919191" />
        </div>
      </div>
      <!-- attendance record -->
      <div class="mt-6" v-if="studentsInClass !== ''">
        <p
          class="font-[sora] px-2 text-center font-[500] text-[14px] text-success"
        ></p>
        <table>
          <thead>
            <tr>
              <th>Attended</th>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Class_ID</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in studentsInClass" :key="item.id">
              <td>
                <input
                  type="checkbox"
                  v-model="item.status"
                  @change="handleattendancecheck(item)"
                />
              </td>
              <td>{{ item.id }}</td>
              <td>{{ item.first_name }} {{ item.last_name }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.class_id }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "teacher" });
import {
  PhCalendarCheck,
  PhCalendarBlank,
  PhFileSearch,
} from "@phosphor-icons/vue";
import { DatePicker } from "v-calendar";

import "v-calendar/style.css";
import { ref, watch } from "vue";
const client = useSchoolStore();
await client.init();

function formatDate(date) {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}
const date = ref(new Date());
const studentsInClass = ref([]);

watch(date, () => {
  getTeachersClass();
});

function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const handleattendancecheck = async (value) => {
  const datehandled = value.date;
  const ifrecordalreadyexists = await client.getattendanceofclass(
    value.id,
    datehandled
  );
  if (ifrecordalreadyexists.length) {
    await client.updateattendance(
      value.status,
      value.class_id,
      value.id,
      datehandled
    );
  } else {
    await client.createAttendancerecord(
      value.class_id,
      value.id,
      datehandled,
      value.status
    );
  }
};

const getTeachersClass = async () => {
  const res = await client.getClassStudents();
  studentsInClass.value = res;
  for (const students of studentsInClass.value) {
    const attendance = await client.getattendanceofclass(
      students.id,
      formatDateToYYYYMMDD(date.value)
    );
    students.status = attendance[0]?.status || false;
    students.date = attendance[0]?.date || date.value;
    if (!attendance.length) {
      students.date = formatDateToYYYYMMDD(date.value);
    }
  }
};

await getTeachersClass();

const masks = ref({
  modelValue: "YYYY-MM-DD",
});
</script>

<style scoped>
.container {
  background: #f9f9f9;
  margin-top: 20px;
  overflow-x: auto;
  min-height: calc(100% - 90px);
}
.inputbox input {
  background-color: #f8f8f8;
  max-width: 400px;
  padding: 6px;
  outline: none;
}
.inputbox select {
  background-color: #f8f8f8;
  max-width: 400px;
  padding: 6px;
  outline: none;
  color: #919191;
}
.inputbox label {
  font-family: sora;
  font-weight: 500;
}
.headertitle {
  color: #011b33;
  font-family: Sora;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 28px;
  margin-left: 35px;
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
    max-width: 435px;
  }
}
@media screen and (max-width: 400px) {
  .container {
    max-width: 340px;
  }
}
</style>
