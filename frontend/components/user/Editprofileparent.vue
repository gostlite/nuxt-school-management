<template>
  <div
    class="bg-[#4A4A4A66] w-screen left-0 flex items-center justify-center top-0 h-screen fixed"
  >
    <div class="bg-white flex rounded-md w-5/6 md:w-[70%] min-h-[500px]">
      <div class="border-r-2 border-[#88888833] p-[20px] pr-0 w-20 md:w-40">
        <div class="border-b-2 p-3 border-[#88888833]">
          <div
            @click="hideModal"
            class="flex gap-1 items-center cursor-pointer"
          >
            <p class="text-[#494949] text-[16px] font-[sora] font-[600]">
              Go Back
            </p>
            <ph-caret-left :size="20" weight="thin" />
          </div>
        </div>
      </div>
      <div class="p-[20px] grow">
        <div class="flex justify-between">
          <p class="text-[#494949] font-[sora] text-[22px] font-[600]">
            Edit Profile
          </p>
          <button
            @click="submitForm"
            class="font-[lato] font-[700] text-white bg-success py-2 px-8 rounded-[5px]"
          >
            Save
          </button>
        </div>
        <!-- profileimg -->
        <div class="">
          <div v-if="userDetails" class="w-[90px] h-[90px] mx-auto relative">
            <nuxt-img
              :src="avatarUrl"
              alt=""
              class="rounded-full object-cover w-full h-full"
            />
            <div
              @click="openFileExplorer"
              class="w-[27px] h-[27px] cursor-pointer rounded-full bg-success flex items-center justify-center text-white absolute bottom-0 right-0"
            >
              <ph-pencil-simple :size="22" weight="thin" />
            </div>
            <input
              type="file"
              id="fileInput"
              ref="fileInputRef"
              accept="image/*"
              style="display: none"
              @change="handleImageChange"
            />
          </div>
        </div>
        <!-- form -->
        <form ref="myForm" @submit.prevent="submitForm">
          <div class="flex flex-col gap-4">
            <div class="flex flex-wrap gap-4 w-full">
              <div class="inputbox">
                <label for="firstName">First name</label>
                <input id="firstName" v-model="firstName" />
              </div>
              <div class="inputbox">
                <label for="lastName">Last Name</label>
                <input id="lastName" v-model="lastName" />
              </div>
            </div>
            <div class="inputbox">
              <label for="email">Email</label>
              <input id="email" v-model="email" />
            </div>
            <div class="inputbox">
              <label for="phoneNumber">Phone Number</label>
              <input id="phoneNumber" v-model="phoneNumber" />
            </div>
            <div class="inputbox">
              <label for="address">Country</label>
              <input id="address" v-model="country" />
            </div>
            <div class="flex flex-wrap gap-4 w-full">
              <div class="inputbox">
                <label for="firstName">State</label>
                <input id="firstName" v-model="state" />
              </div>
              <div class="inputbox">
                <label for="lastName">City</label>
                <input id="lastName" v-model="city" />
              </div>
            </div>
            <div class="flex flex-wrap gap-4 w-full">
              <div class="inputbox">
                <label for="firstName">Address line 1</label>
                <input id="firstName" v-model="address1" />
              </div>
              <div class="inputbox">
                <label for="lastName">Address line 2</label>
                <input id="lastName" v-model="address2" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Customtoast v-if="mytoast.toshow" :toastdetails="toastMessage" />
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { PhCaretLeft, PhPencilSimple } from "@phosphor-icons/vue";
const userDetails = ref();
const supabase = useSupabaseClient();
const client = useSchoolStore();

//toast
const mytoast = useToast();
const toastMessage = ref({ status: "", message: "" });

const showcustomtoast = (status, message) => {
  toastMessage.value.status = status;
  toastMessage.value.message = message;
  mytoast.toggletoast();
};

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phoneNumber = ref("");
const country = ref("");
const state = ref("");
const city = ref("");
const avatarUrl = ref("");
const address1 = ref("");
const address2 = ref("");
const name_of_file = ref("");
const file = ref("");
const file_size = ref("");
const school_uuid = await useSchoolStore().getSchoolUuid();

const allowed_files = ["image/jpeg", "image/png", "image/jpg"];

const myForm = ref(null);

const fileInputRef = ref(null); // Create a ref for the file input

const openFileExplorer = () => {
  fileInputRef.value.click(); // Trigger the file input element
};

const handleImageChange = (event) => {
  const myfile = event.target.files[0];
  if (myfile) {
    file.value = myUpload(myfile);
    const imageUrl = URL.createObjectURL(myfile);
    avatarUrl.value = imageUrl;
  }
};

// Handle the selected file
const myUpload = (upload) => {
  const selectedFile = upload;
  const { name, size } = selectedFile;

  name_of_file.value = name;
  file_size.value = size;

  return selectedFile;
};

const getUrl = (path) => {
  const { data } = supabase.storage.from("avatars").getPublicUrl(`${path}`);
  return data?.publicUrl;
};

const submitForm = async () => {
  if (myForm.value) {
    const uploadData = await upload();
    const response = await client.updateParentProfile(
      userDetails.value[0].profiles.id,
      firstName.value,
      lastName.value,
      email.value,
      phoneNumber.value,
      uploadData ? uploadData.path : userDetails.value[0].profiles.avatar_url,
      country.value,
      state.value,
      city.value,
      address1.value,
      address2.value
    );
    if (response) {
      showcustomtoast("success", "Parent has been updated");
    } else {
      showcustomtoast("error", "Something went wrong");
    }
  }
};

const upload = async () => {
  if (!file.value) {
    return;
  } else if (!allowed_files.includes(file.value.type)) {
    // if the file is not in the allowed file format
    showcustomtoast("error", "This file is not permitted");
    return;
  } else if (file_size.value > 10000000) {
    //check the size of the file
    showcustomtoast("error", "file too large");
    return;
  } else {
    const user = useSupabaseUser();
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(
        school_uuid + "/" + user.value.id + "/" + name_of_file.value,
        file.value
      );
    return data;
  }
};

const props = defineProps({
  hideModal: Function,
  user: Number,
  queryId: Number,
  queryName: String,
});
const getStudentprofile = async (id) => {
  let { data, error } = await supabase
    .from("students")

    .select(
      `*,
    profiles(
      *
    )
  `
    )
    .eq(props.queryName, props.queryId)
    .eq("id", props.user);
  userDetails.value = data;
};
onMounted(() => {
  getStudentprofile();
});
watch(userDetails, (newUserDetails) => {
  if (newUserDetails) {
    firstName.value = newUserDetails[0].profiles.first_name || "";
    lastName.value = newUserDetails[0].profiles.last_name || "";
    email.value = newUserDetails[0].profiles.email || "";
    phoneNumber.value = newUserDetails[0].profiles.phone || "";
    country.value = newUserDetails[0].profiles.address.country || "";
    state.value = newUserDetails[0].profiles.address.state || "";
    city.value = newUserDetails[0].profiles.address.city || "";
    address1.value = newUserDetails[0].profiles.address.address_line_1 || "";
    address2.value = newUserDetails[0].profiles.address.address_line_2 || "";
    avatarUrl.value = getUrl(newUserDetails[0].profiles.avatar_url) || "";
  }
});
</script>

<style scoped>
.inputbox {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.inputbox label {
  color: #494949;
  font-family: Sora;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.inputbox input {
  border: 2px solid #d3cfcf;
  outline: 0;
  padding: 5px;
}
</style>
