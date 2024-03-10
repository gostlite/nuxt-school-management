<template>
  <div>
    <div
      class="text-center text-purple-950 text-4xl md:text-6xl font-bold leading-10 pb-7"
    >
      {{ title }}
    </div>
    <Notify :notification="notify" />
    <form class="flex flex-col justify-center mx-auto px-9 md:w-1/2">
      <div
        class="flex flex-col justify-center mb-8 py-9 mx-9 px-9 border-2 border-[#D7DAE0] border-dashed"
        @dragover="handleDragOver"
        @drop="handleDrop"
      >
        <div class="flex flex-col justify-center">
          <div class="flex justify-center">
            <svg
              style="color: rgb(65, 18, 101)"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="70"
              fill="currentColor"
              class="bi bi-cloud-upload-fill"
              viewBox="0 0 16 16"
            >
              <!-- SVG path here -->
              <path
                fill-rule="evenodd"
                d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z"
                fill="#411265"
              ></path>
            </svg>
          </div>

          <p class="text-center text-[#411265] text-2xl md:text-4xl drag">
            Drag and drop your files here
          </p>
          <p class="text-center text-[#631D98AD] text-base md:text-1xl format">
            Files supported: MP4, JPEG, PNG
          </p>
          <p></p>
        </div>
        <!-- THE STYLE PREVENTS THE WHOLE CONTAINER FROM CLICKING EVENT -->
        <div class="flex justify-center w-100px" style="pointer-events: none">
          <!-- CHANGING THE STYLE TO ACCEPT POINTER CLICK EVENT -->
          <label
            for="fileInput"
            class="btn"
            @click="handleFileInputClick"
            style="pointer-events: auto"
            >Choose File</label
          >
          <input
            id="fileInput"
            type="file"
            accept="image/*,video/mp4"
            class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            @change="handleFileChange"
            @dragover="handleDragOver"
            @drop="handleDrop"
          />
        </div>
        <div>{{ name_of_file }}</div>
      </div>
      <button @click.prevent="upload" class="btn btn-outlined mx-7 mb-5">
        Upload
      </button>
    </form>
  </div>
</template>

<script setup>
const client = Client();
const supabase = useSupabaseClient();
const notify = ref({});
definePageMeta({ layout: "form-cancel" });
const Header = UploadHeader();

const name_of_file = ref("");
const title = Header.Header;
const file = ref("");
// const { id: user } = await client.getUser();
const user = useSupabaseUser();

// Handle the uplaod
const myUpload = (upload) => {
  const selectedFile = upload;
  console.log("Selected file:", selectedFile);
  const { name } = selectedFile;

  name_of_file.value = name;
  console.log(name_of_file.value);
  return selectedFile;
};
// HANDLE THE CLICK AND SELECT OF FILE
const handleFileChange = (event) => {
  const fileInput = event.target;
  if (fileInput.files && fileInput.files[0]) {
    // You can access the selected file here
    file.value = myUpload(fileInput.files[0]);
  }
};
// HANDLE THE DRAG TO PREVENT THE DEFAULT BEHAVIOUR
const handleDragOver = (event) => {
  event.preventDefault();
};
// HANDLE THE DROPPING OF FILE
const handleDrop = (event) => {
  event.preventDefault();
  const fileList = event.dataTransfer.files;

  if (fileList && fileList.length > 0) {
    file.value = myUpload(fileList[0]);
  }
};

const handleFileInputClick = (event) => {
  event.stopPropagation();
};

// upload the file
const upload = async () => {
  console.log(user.value);
  let { id: muser } = user.value;
  try {
    if (!user.value) {
      throw new Error("Not authenticated");
    }

    const { data, error } = await supabase.storage
      .from("activities")
      .upload(muser + "/" + name_of_file.value, file.value);
    if (data) {
      successinfo(notify, 3000, "file uploaded");
      navigateTo("activityform");
    }
    throw new Error(error);
    // console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.drag {
  font-family: Syne;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0em;
}
.format {
  font-family: Syne;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: 0em;
}
</style>
