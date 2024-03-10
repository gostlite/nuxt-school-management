<template>
  <div class="container sm:max-w-full">
    <h1 class="headertitle">Billing Activity</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Description</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in 4" :key="index">
          <td>5646474688</td>
          <td>Alex Samuel</td>
          <td>N 50,000</td>
          <td>School Fees</td>
          <td>8/15/2023</td>
          <td>6:55pm</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  background: #fff;
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
