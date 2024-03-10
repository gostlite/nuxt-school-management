<template>
  <div class="flex flex-col items-center text-justify pt-10">
    <p class="mt-6 text-[#631D98] text-bold">
      MADE TO PLAY TOGETHER; BUILT TOGETHER
    </p>
    <p class="text-[#411265] text-5xl text-center w-3/5 my-3">
      One integrated system handles everything.
    </p>
    <div
      class="grid md:grid-cols-2 gap-8 md:px-4 justify-center p-4 w-4/5 my-14"
    >
      <!-- <div></div> -->
      <img
        src="/assets/classroom-min.jpg"
        alt="layer2"
        class="rounded-r-[20px] h-full object-cover border-[3px] border-white shadow-xl"
      />
      <div>
        <p class="text-2xl md:text-3xl layers leading-10 text-center">
          Take the guesswork out of managing the classroom.
        </p>
        <p class="layer-content">
          Donate resources to help your teachers succeed. With ratio monitoring,
          attendance tracking, digital daily notes, and other features, they can
          manage their classrooms more effectively and save time.
        </p>
        <p class="layer-content">
          Improve classroom efficiency to grow your childcare company. By
          automating time-consuming tasks, you can free up your teachers'
          attention to concentrate on the growth of the students.
        </p>
      </div>
    </div>
    <div
      class="grid md:grid-cols-2 gap-8 md:px-4 justify-center pt-6 w-4/5 my-14"
    >
      <div>
        <p class="text-2xl md:text-3xl layers text-center">
          Simply press a button to contact parents.
        </p>

        <p class="layer-content">
          While providing parents with a glimpse into their child's day,
          strengthen your relationships with them. You can share images and
          videos, keep track of daily logs, send messages, and highlight
          activities.
        </p>
        <p class="layer-content">
          Never must parents miss a stage of their child's growth. You can
          connect with families and share the milestones that matter most using
          Edu.page comprehensive set of tools.
        </p>
      </div>
      <img
        src="/assets/img/servis2.png"
        alt="service"
        class="rounded-l-[20px] h-full object-cover border-[3px] border-white shadow-xl"
      />
    </div>
    <!-- last layer -->
    <div
      class="grid md:grid-cols-2 gap-8 md:px-9 justify-center pt-6 w-4/5 my-14"
    >
      <img
        src="/assets/teamphoto.jpg"
        class="rounded-r-[20px] h-full object-cover border-[3px] border-white shadow-xl"
      />
      <div>
        <h2 class="text-2xl md:text-3xl layers">
          Ensure the success of your team.
        </h2>
        <p class="layer-content">
          Make sure your facility is adequately staffed and that employees are
          managed effectively. Right on our platform, keep an eye on requests
          for time off, breaks, and schedules.
        </p>
        <p class="layer-content">
          You can schedule and keep an eye on your staff at all of your centers
          thanks to multi-center functionality. It is easier to manage leading
          your team when everything is connected.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.layers {
  font-family: Lato, sans-serif;
  font-weight: 600;
  line-height: 28px;
  word-spacing: 1px;
  /* letter-spacing: 0em; */
  color: #631d98;
}
.layer-content {
  color: #41126599;
  font-family: Lato, sans-serif;
  font-weight: 500;
  /* line-height: 28px; */
  letter-spacing: 0em;
  margin-top: 25px;
}
</style>
