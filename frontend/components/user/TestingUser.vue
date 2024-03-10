<template>
  <div class="mx-80">
    <h1 class="text-2xl text-gray-800 font-semibold font-custom mt-10 mb-2">
      Create A User
    </h1>
    <form enctype="multipart/form-data" method="post">
      <Notify :notification="notification" class="grid" />

      <div
        class="w-96 h-96 flex-col justify-start items-start gap-2.5 inline-flex"
      >
        <div class="w-96 h-96 relative">
          <div class="w-96 h-16 left-0 top-0 absolute">
            <div
              class="left-0 top-0 absolute text-stone-950 text-sm font-medium font-['Sora']"
            >
              First Name
            </div>
            <input
              required
              id="useremail"
              type="email"
              placeholder="FIrst name"
              class="w-96 h-11 left-0 top-[27px] absolute bg-gray-200 rounded-lg"
            />
          </div>
          <div class="w-96 h-16 left-0 top-[225px] absolute">
            <div
              class="left-0 top-0 absolute text-stone-950 text-sm font-medium font-['Sora']"
            >
              Gender
            </div>
            <div
              class="w-96 h-11 left-0 top-[27px] absolute bg-gray-200 rounded-lg"
            ></div>
            <div
              class="left-[32px] top-[42px] absolute text-neutral-600 text-sm font-medium font-['Lato']"
            >
              Select
            </div>
          </div>
          <div class="w-96 h-16 left-0 top-[511px] absolute">
            <div
              class="left-0 top-0 absolute text-stone-950 text-sm font-medium font-['Sora']"
            >
              Select a Student
            </div>
            <div
              class="w-96 h-11 left-0 top-[27px] absolute bg-gray-200 rounded-lg"
            ></div>
            <div
              class="left-[32px] top-[42px] absolute text-neutral-600 text-xs font-normal font-['Sora']"
            >
              Select
            </div>
          </div>
          <div class="w-96 h-16 left-[505px] top-[225px] absolute">
            <div
              class="left-0 top-0 absolute text-stone-950 text-sm font-medium font-['Sora']"
            >
              DOB
            </div>
            <div
              class="w-96 h-11 left-0 top-[27px] absolute bg-gray-200 rounded-lg"
            ></div>
            <div
              class="left-[32px] top-[42px] absolute text-neutral-400 text-xs font-normal font-['Sora']"
            >
              Date of Birth
            </div>
          </div>
          <div class="w-96 h-16 left-[505px] top-[511px] absolute">
            <div
              class="left-0 top-0 absolute text-stone-950 text-sm font-medium font-['Sora']"
            >
              Select a Parent
            </div>
            <div
              class="w-96 h-11 left-0 top-[27px] absolute bg-gray-200 rounded-lg"
            ></div>
            <div
              class="left-[32px] top-[42px] absolute text-neutral-600 text-xs font-normal font-['Sora']"
            >
              Select
            </div>
          </div>
          <div class="w-96 h-16 left-0 top-[335px] absolute">
            <div
              class="left-0 top-0 absolute text-stone-950 text-sm font-medium font-['Sora']"
            >
              Qualification
            </div>
            <div
              class="w-96 h-11 left-0 top-[27px] absolute bg-gray-200 rounded-lg"
            ></div>
            <div
              class="left-[32px] top-[42px] absolute text-neutral-400 text-xs font-normal font-['Sora']"
            >
              Qualification
            </div>
          </div>
          <div class="w-96 h-16 left-[505px] top-0 absolute">
            <div
              class="left-0 top-0 absolute text-stone-950 text-sm font-medium font-['Sora']"
            >
              Last Name
            </div>
            <div
              class="w-96 h-11 left-0 top-[27px] absolute bg-gray-200 rounded-lg"
            ></div>
            <div
              class="left-[32px] top-[43px] absolute text-neutral-400 text-xs font-normal font-['Sora']"
            >
              Last Name
            </div>
          </div>
          <div class="w-96 h-16 left-0 top-[110px] absolute">
            <div
              class="left-0 top-0 absolute text-stone-950 text-sm font-medium font-['Sora']"
            >
              Email Address
            </div>
            <input
              required
              type="email"
              placeholder="Email "
              class="w-96 h-11 left-0 top-[27px] absolute bg-gray-200 rounded-lg"
            />
          </div>
          <div class="w-96 h-16 left-[505px] top-[111px] absolute">
            <div
              class="left-0 top-0 absolute text-stone-950 text-sm font-medium font-['Sora']"
            >
              Role
            </div>
            <div
              class="w-96 h-11 left-0 top-[26px] absolute bg-gray-200 rounded-lg"
            ></div>
            <div
              class="left-[32px] top-[43px] absolute text-neutral-600 text-xs font-normal font-['Sora']"
            >
              Select
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
