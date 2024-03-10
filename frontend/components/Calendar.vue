<!-- CALENDAR COMPONENT -->
<template>
  <div
    class="pl-2 flex flex-col justify-center mt-8 mb-4 bg-white md:w-4/5 mx-auto"
  >
    <div
      class="font-bold text-left md:text-center text-purple-950 text-4xl md:text-6xl leading-10 event mb-3 md:mb-3 md:mr-2"
    >
      Calendar of Events
    </div>

    <div class="flex flex-col md:flex-row md:justify-left ml-3">
      <!-- Calendar Cards COMPONENTS FROM CALENDAR COMPONENT DIR-->
      <CalendarcomponentsTiming />
      <CalendarcomponentsEndDate />
      <CalendarcomponentsAudience @showAudience="audienceOption" />
      <CalendarcomponentsEventType />
    </div>

    <!-- Checkboxes -->
    <div class="flex flex-col mt-4 items-left md:ml-4">
      <div class="flex items-center space-x-4">
        <input
          v-model="tutor_type"
          value="physical"
          type="checkbox"
          id="option1"
          name="options"
          class="form-checkbox text-purple-950 checked:bg-purple-800 checked:border-transparent"
        />
        <label for="option1" class="cursor-pointer text-purple-950 check_typo"
          >Physical Tours</label
        >
      </div>
      <div class="flex items-center space-x-4">
        <input
          v-model="tutor_type"
          value="virtual"
          type="checkbox"
          id="option2"
          name="options"
          class="form-checkbox text-purple-950 checked:bg-purple-800 checked:border-transparent"
        />
        <label for="option2" class="cursor-pointer text-purple-950 check_typo"
          >Virtual Only</label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // import Icon from "@assets/calendarIcon.svg";
  data() {
    return {
      tutor_type: [],
      showAudienceOptionsFlag: false,
      events: [
        { myevent: "06/20/2019", calender: "true" },
        { myevent: "End Date", calender: "true" },
        { myevent: "Audience", calender: "false" },
        { myevent: "Event type", calender: "false" },
      ],
    };
  },
  methods: {
    showAudienceOptions(event) {
      if (event.myevent === "Audience") {
        this.showAudienceOptionsFlag = !this.showAudienceOptionsFlag;
      } else {
        this.showAudienceOptionsFlag = false;
      }
    },
    audienceOption() {
      this.showAudienceOptionsFlag = !this.showAudienceOptionsFlag;
    },
  },
};
</script>

<style scoped>
.event {
  font-family: Syne;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0em;
}
.event_option {
  font-family: Syne;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
}
.check_typo {
  font-family: Syne;
  font-size: 15px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
}
</style>
