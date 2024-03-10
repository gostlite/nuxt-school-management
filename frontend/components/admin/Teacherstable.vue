<template>
  <div class="container sm:max-w-full">
    <table>
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <!-- <th>ID</th> -->
          <th>Photo</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Date Of Birth</th>
          <th>Joined</th>
          <th>Qualification</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(teacher, index) in teachersData" :key="index">
          <td><input type="checkbox" /></td>
          <!-- <td>{{ teacher.id }}</td> -->
          <td>
            <img
              class="rounded-full bg-cover bg-center border h-[40px] w-[40px] border-white shadow-md"
              :src="'/'+ teacher.avatar_url || 'assets/img/pana.png'"
              alt="teacher Photo"
            />
          </td>
          <td>{{ teacher.first_name }} {{teacher.last_name}}</td>
          <td>{{ teacher.gender }}</td>
          <td>{{ teacher.email }}</td>
          <td>{{ teacher.phone }}</td>
          <td>{{ formatAddress(teacher.address) }}</td>
          <td>{{ teacher.meta?.dob || null }}</td>
          <td>{{ teacher.updated_at.slice(0,10) }}</td>
          <td>{{ teacher.qualifications }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps(["teachersData"]);
let formatAddress = (add) => add.address_line_1+', '+add.city
</script>

<style scoped>
.container {
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  background: #fff;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.19);
  margin-top: 20px;
  min-height: 500px;
  overflow-x: auto;
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
    max-width: 350px;
  }
}
@media screen and (max-width: 400px) {
  .container {
    max-width: 250px;
  }
}
</style>

