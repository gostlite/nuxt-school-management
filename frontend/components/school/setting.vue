<template>
  <div class="flex justify-center">
    <div class="w-full md:w-1/2">
      <div class="p-4 bg-white rounded shadow-md">
        <h2 class="mb-4 text-lg font-semibold">Add School Details</h2>

        <div class="mb-4">
          <label class="block text-sm font-medium">School Name</label>
          <input v-model="school.name" class="w-full mt-1 input" />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium">School Hours</label>
          <div class="flex space-x-2">
            <input v-model="school.hours.start" placeholder="Start" class="w-1/2 input" />
            <input v-model="school.hours.end" placeholder="End" class="w-1/2 input" />
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium">Days</label>
          <!-- You can expand on this part to better capture multiple days -->
          <input v-model="school.days" class="w-full mt-1 input" placeholder="e.g. M-F" />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium">Terms</label>
          <input v-model="school.terms" type="number" class="w-full mt-1 input" />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium">School Fees</label>
          <input v-model="school.schoolFees" type="number" class="w-full mt-1 input" />
        </div>

        <h3 class="mt-4 mb-2 text-sm font-semibold">Address</h3>

        <div class="mb-4">
          <label class="block text-sm font-medium">Street</label>
          <input v-model="school.addresses.street" class="w-full mt-1 input" />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium">City</label>
          <input v-model="school.addresses.city" class="w-full mt-1 input" />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium">State</label>
          <input v-model="school.addresses.state" class="w-full mt-1 input" />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium">Country</label>
          <input v-model="school.addresses.country" class="w-full mt-1 input" />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium">ZIP Code</label>
          <input v-model="school.addresses.zip" class="w-full mt-1 input" />
        </div>

        <button @click="saveSchool" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { storeToRefs } from "pinia";

interface School{
  hours:{
    start: string, // 7am
    end: string // 2pm
  },
  days: string[],// M - F
  terms: number, // 1st term
  schoolFees: number, // 10000
  name: string, // School Name
  addresses:{
    street: string, // 1234 street
    city: string, // city
    state: string, // state
    country: string, // country
    zip: string // zip
  },
}
let schoolStore = useSchoolStore()
let {school} = storeToRefs(schoolStore)

const supabase = useSupabaseClient();
let  saveSchool = async() => {
  try {
    const { data, error } = await supabase.from('schools').upsert([this.school]);
    if (error)   throw error;
  } catch (error) {
    console.error("Error saving school:", error);
  }
}


</script>
