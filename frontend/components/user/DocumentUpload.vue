<template>
  <div v-if="close_document" class="flex justify-center items-center">
    <div
      class="lg:w-1/3 md:w-2/3 sm:w-full border border-grey-500 rounded-lg text-center h-[670px]"
    >
      <div class="p-5 flex items-end justify-end">
        <svg
          class="cursor-pointer"
          @click="close"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.01074 22.9906L16.0014 15.9999L22.9921 22.9906M22.9921 9.00928L16.0001 15.9999L9.01074 9.00928"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <!-- <p class="text-left">Student name</p> -->
      <input
        v-model="student_name"
        placeholder="Student name"
        class="w-96 h-11 bg-gray-200 rounded-lg p-5"
      />
      <select
        v-model="document_name"
        name=""
        id=""
        class="w-96 h-11 bg-gray-200 rounded-lg mt-[64px]"
      >
        <option value="Medication">Medication</option>
        <option value="Incident">Incident</option>
        <option value="payment doc">Fees document</option>
        <option value="health doc">Health document</option>
        <option value="others">Others</option>
      </select>
      <input
        v-model="other_document"
        v-if="document_name === 'others'"
        placeholder="document name"
        class="w-96 h-11 bg-gray-200 rounded-lg mt-[64px] pl-5"
      />
      <Notify :notification="notify" />
      <div
        class="w-96 h-48 bg-blue-300 bg-opacity-10 rounded-lg border border-blue-400 mx-auto flex flex-col justify-center items-center mt-[46px]"
        @dragover="handleDragOver"
        @drop="handleDrop"
      >
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.70312 34.125C5.57181 34.125 4.48683 33.6756 3.68687 32.8756C2.88691 32.0757 2.4375 30.9907 2.4375 29.8594V23.7656C2.4375 23.2808 2.63011 22.8158 2.97295 22.4729C3.31579 22.1301 3.78078 21.9375 4.26562 21.9375C4.75047 21.9375 5.21546 22.1301 5.5583 22.4729C5.90114 22.8158 6.09375 23.2808 6.09375 23.7656V29.8594C6.09375 30.1958 6.36675 30.4688 6.70312 30.4688H32.2969C32.4585 30.4688 32.6135 30.4045 32.7278 30.2903C32.842 30.176 32.9062 30.021 32.9062 29.8594V23.7656C32.9062 23.2808 33.0989 22.8158 33.4417 22.4729C33.7845 22.1301 34.2495 21.9375 34.7344 21.9375C35.2192 21.9375 35.6842 22.1301 36.0271 22.4729C36.3699 22.8158 36.5625 23.2808 36.5625 23.7656V29.8594C36.5625 30.9907 36.1131 32.0757 35.3131 32.8756C34.5132 33.6756 33.4282 34.125 32.2969 34.125H6.70312Z"
            fill="#6A9CFF"
          />
          <path
            d="M28.7138 11.505C28.8835 11.6747 29.0181 11.8761 29.1099 12.0977C29.2017 12.3194 29.2489 12.557 29.2489 12.7969C29.2489 13.0368 29.2017 13.2744 29.1099 13.496C29.0181 13.7177 28.8835 13.9191 28.7138 14.0888C28.5442 14.2584 28.3428 14.393 28.1211 14.4848C27.8995 14.5766 27.6619 14.6239 27.422 14.6239C27.182 14.6239 26.9445 14.5766 26.7228 14.4848C26.5011 14.393 26.2997 14.2584 26.1301 14.0888L21.3282 9.28932V23.1563C21.3282 23.6411 21.1356 24.1061 20.7928 24.4489C20.4499 24.7918 19.9849 24.9844 19.5001 24.9844C19.0152 24.9844 18.5502 24.7918 18.2074 24.4489C17.8646 24.1061 17.672 23.6411 17.672 23.1563V9.28932L12.8701 14.0888C12.7004 14.2584 12.499 14.393 12.2774 14.4848C12.0557 14.5766 11.8181 14.6239 11.5782 14.6239C11.3383 14.6239 11.1007 14.5766 10.8791 14.4848C10.6574 14.393 10.456 14.2584 10.2863 14.0888C10.1167 13.9191 9.98211 13.7177 9.89029 13.496C9.79848 13.2744 9.75122 13.0368 9.75122 12.7969C9.75122 12.557 9.79848 12.3194 9.89029 12.0977C9.98211 11.8761 10.1167 11.6747 10.2863 11.505L18.2082 3.58314C18.3778 3.41333 18.5792 3.27862 18.8008 3.18671C19.0225 3.09479 19.2601 3.04749 19.5001 3.04749C19.7401 3.04749 19.9777 3.09479 20.1993 3.18671C20.421 3.27862 20.6224 3.41333 20.792 3.58314L28.7138 11.505Z"
            fill="#6A9CFF"
          />
        </svg>
        <p>Drag and drop</p>
        <p>or</p>
        <!-- <p class="text-accent">Browse</p> -->
        <!-- the drag and drop concept -->

        <div class="flex justify-center w-100px" style="pointer-events: none">
          <!-- CHANGING THE STYLE TO ACCEPT POINTER CLICK EVENT -->
          <label
            for="fileInput"
            class="text-accent cursor-pointer"
            @click="handleFileInputClick"
            style="pointer-events: auto"
            >Browse</label
          >
          <input
            id="fileInput"
            type="file"
            accept="image/*, .pdf, .doc, .docx, .txt, .csv"
            class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            @change="handleFileChange"
          />
        </div>
      </div>
      <div>
        <span class="text-neutral-600 text-sm font-normal font-['Sora']"
          >Maximum upload file limit: </span
        ><span class="text-neutral-600 text-sm font-bold font-['Sora']"
          >10mb</span
        >
      </div>
      <Notify :notification="notify" />

      <p class="mt-5">
        {{ name_of_file }} - {{ byteSymbol[0] }} {{ byteSymbol[1] }}
      </p>
      <button
        @click.prevent="upload"
        :disabled="disableUploadBtn"
        class="btn btn-outlined w-96 h-11 bg-pink-600 rounded-lg mt-6 text-white hover:text-black"
      >
        Upload
      </button>
    </div>
  </div>
</template>

<script setup>
const school_uuid = await useSchoolStore().getSchoolUuid(); // get school uuid
const supabase = useSupabaseClient();
const name_of_file = ref("");
const file = ref("");
const file_size = ref("");
const student_name = ref("");
const document_name = ref("");
const notify = ref({});
const other_document = ref("");
const close_document = ref(true);
const allowed_files = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "application/doc",
  "text/csv",
  "application/msword",
  "text/plain",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const disableUploadBtn = ref(false);

const handleFileInputClick = (event) => {
  event.stopPropagation();
};

// HANDLE THE DRAG TO PREVENT THE DEFAULT BEHAVIOUR
const handleDragOver = (event) => {
  event.preventDefault();
};

const close = () => {
  console.log("closed");
  close_document.value = false;
};

// Handle the selected file
const myUpload = (upload) => {
  const selectedFile = upload;
  console.log("Selected file:", selectedFile);
  const { name, size } = selectedFile; //destructure the name

  name_of_file.value = name;
  file_size.value = size;

  return selectedFile;
};

// HANDLE THE DROPPING OF FILE
const handleDrop = (event) => {
  event.preventDefault();
  const fileList = event.dataTransfer.files;

  if (fileList && fileList.length > 0) {
    file.value = myUpload(fileList[0]);
    // console.log(fileList[0]);
    // console.log(name_of_file.value);
  }
};

// HANDLE THE CLICK AND SELECT OF FILE
const handleFileChange = (event) => {
  const fileInput = event.target;
  if (fileInput.files && fileInput.files[0]) {
    // You can access the selected file here
    file.value = myUpload(fileInput.files[0]);
    // console.log(name_of_file.value);
  }
};

// handle upload
const upload = async () => {
  if (!file.value) {
    // if no file was selected
    checker(notify, 2000, "Please Upload a file");
    return;
  }
  if (!allowed_files.includes(file.value.type)) {
    // if the file is not in the allowed file format
    checker(notify, 2000, "This file is not permitted");
    return;
  }
  if (!student_name.value || !document_name.value) {
    //if the no student name or no selected document name
    checker(notify, 3000, "Fill the appropriate fields");
    return;
  }
  if (document_name.value === "others" && !other_document.value) {
    // if the field is not selected
    checker(notify, 3000, "Write the name of the other document");
    return;
  }
  if (file_size.value > 10000000) {
    //check the size of the file
    checker(notify, 3000, "file too large");
    return;
  }
  console.log(file.value.type);
  disableUploadBtn.value = true;
  const user = useSupabaseUser();
  console.log(user.value.id);
  const { data, error } = await supabase.storage
    .from("documents")
    .upload(
      school_uuid + "/" + user.value.id + "/" + name_of_file.value,
      file.value
    );
  if (data) {
    const { data: documentData, error: documentError } = await supabase
      .from("documents")
      .insert([
        {
          name:
            document_name.value !== "others"
              ? document_name?.value
              : other_document?.value,
          file_details: {
            "school id": school_uuid,
            "uploader id": user.value.id,
            "uploader name": student_name.value,
          },
          school_id: `${school_uuid}`,
          user_id: `${user.value.id}`,
          // user_post: { caption: caption?.value },
          media: data.path,
        },
      ])
      .select();
    if (documentError) {
      checker(notify, 3000, documentError.message);

      // delete the uploaded file if there was an error

      const { data, error } = await supabase.storage
        .from("documents")
        .remove([school_uuid + "/" + user.value.id + "/" + name_of_file.value]);
      console.log(data);
      disableUploadBtn.value = false;
      throw new Error(documentError.message);
    }
    console.log("this is the document data", documentData);
    close_document.value = false;
  }
  if (error) {
    const { message } = error;
    checker(notify, 3000, message);
    disableUploadBtn.value = false;
  }
};

const byteSymbol = computed(() => {
  let symbol = "";
  let item_size = 0;

  if (file_size.value < 1000) {
    symbol = "bytes";
    return [file_size.value, symbol];
  } else {
    symbol = file_size.value >= 1000 && file_size.value < 1000000 ? "Kb" : "Mb";
    item_size =
      file_size.value >= 1000 && file_size.value < 1000000
        ? Math.floor(file_size.value / 1000)
        : Math.floor(file_size.value / 1000000);
    return [item_size, symbol];
  }
});
</script>

<style scoped>
/* You can add any additional styling here */
</style>
