<template>
  <div class="bg-[#f9f9f9] p-5">
    <div class="my-6 pl-9">
      <h1 class="font-[sora] font-semibold">Admissions</h1>
    </div>
    <div class="bg-white w-[95%] mx-auto p-5">
      <h1 class="font-[roboto] font-[500] py-4">Add New Students</h1>
      <div>
        <form class="">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="inputbox">
              <label>First Name</label>
              <input placeholder="Enter Firstname" />
            </div>
            <div class="inputbox">
              <label>Middle Name</label>
              <input placeholder="Enter Middlename" />
            </div>
            <div class="inputbox">
              <label>Last Name</label>
              <input placeholder="Enter Lastname" />
            </div>
            <div class="inputbox">
              <label>Email</label>
              <input placeholder="Enter Email" />
            </div>
            <div class="inputbox">
              <label>Phone</label>
              <input placeholder="Enter Phone" />
            </div>
            <div class="inputbox">
              <label>Gender</label>
              <select>
                <option>Please select Gender</option>
                <option default="">Male</option>
                <option default="">Female</option>
              </select>
            </div>
            <div class="inputbox">
              <label>Class</label>
              <select>
                <option>Please select Class</option>
                <option default="">Daycare</option>
                <option default="">Nursery</option>
              </select>
            </div>
            <div class="inputbox">
              <label>Session</label>
              <select>
                <option>Please select Session</option>
                <option default="">Summer</option>
                <option default="">Winter</option>
              </select>
            </div>
            <div class="inputbox">
              <label>Biography</label>
              <textarea></textarea>
            </div>
            <div class="inputbox">
              <label>Blood Group</label>
              <select>
                <option>Please select Group</option>
                <option default="">A+</option>
                <option default="">A-</option>
                <option default="">B+</option>
                <option default="">B-</option>
                <option default="">O+</option>
                <option default="">O-</option>
              </select>
            </div>
            <div class="inputbox">
              <label>Religion </label>
              <select>
                <option>Please select Religion</option>
                <option default="">Christian</option>
                <option default="">Islam</option>
                <option default="">Hindu</option>
                <option default="">Buddish</option>
                <option default="">Others</option>
              </select>
            </div>
          </div>
          <div class="flex flex-row gap-3 text-white mt-4">
            <button class="bg-success px-5 py-2 rounded-md max-w-[150px]">
              Save
            </button>
            <button class="bg-warning px-5 py-2 rounded-md max-w-[150px]">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "admin",
});
</script>

<style>
.inputbox {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #f8f8f8;
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
.inputbox textarea {
  background-color: #f8f8f8;
  max-width: 400px;
  padding: 6px;
  outline: none;
  color: #919191;
}
</style>
