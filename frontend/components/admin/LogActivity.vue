<template>
  <div class="container sm:max-w-full">
    <h1 class="headertitle">Today&apos;s Log Activity</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Activity</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in 4" :key="index">
          <td>5646474688</td>
          <td>Class Exam</td>
          <td>15hrs</td>
          <td>8/15/2023</td>
          <td>6:55pm</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  background: #fff;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.19);
  margin-top: 20px;
  min-height: 300px;
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
    max-width: 280px;
  }
}
</style>
