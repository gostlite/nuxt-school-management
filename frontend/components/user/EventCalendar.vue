<script setup>
// import "@fullcalendar/core/vdom";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const props = defineProps({
  can_edit: Boolean, //to make only teacher to ba eable to edit
});
const id = ref(0);
const showEventInput = ref(false); // a flag to show/hide the input field
const newEventTitle = ref(""); // to store the event title
const notify = ref({});
const supabase = useSupabaseClient();
const school_client = useSchoolStore();
await school_client.init();
const school_id = await school_client.getSchoolId();
const class_id = ref("");
const { data: school_events, error: err } = await supabase
  .from("events")
  .select("*")
  .eq("school_id", school_id);
if (!err) {
  console.log("school_events are ", school_events);
}

const calendarOptions = reactive({
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
  initialView: "dayGridMonth",
  headerToolbar: {
    left: "prev,next, today",
    center: "title",
    right: "dayGridMonth, dayGridWeek, listDay",
  },
  editable: props.can_edit,
  selectable: true,
  weekends: false,
  events: school_events ?? [],
  select: async (args) => {
    if (!props.can_edit) {
      // a checker to check if the current user has the privilages to edit
      return;
    }
    if (!newEventTitle.value) {
      checker(notify, 2000, "Please write a title in the field ");
      showEventInput.value = true;
      return;
    }
    const user_role = await school_client.getRole();

    // checking if its an admin or teacher
    if (user_role.roles.id === 1) {
      class_id.value = null;
    } else {
      const class_profile = await school_client.getClassProfile();
      class_id.value = class_profile[0].id;
    }

    console.log(args.start + args.end);
    console.log("this is the arguments", args);
    console.log("this is the cal", args.view.calendar.addEvent);
    id.value = id.value + 1;
    const cal = args.view.calendar;
    cal.unselect();
    cal.addEvent({
      id: `${id.value}`,
      title: `Event: ${newEventTitle.value}`,
      start: args.start,
      end: args.end,
      allDay: true,
    });
    const { data: eventData, error: eventError } = await supabase
      .from("events")
      .insert([
        {
          title: `Event: ${newEventTitle.value}`,
          start: args.start,
          end: args.end,
          school_id: school_id,
          class_id: class_id.value,
        },
      ])
      .select();
    if (eventError) {
      console.error(eventError.message);
    }
    newEventTitle.value = "";
    showEventInput.value = false;
    // document.getElementById("newTitle").value = "";
  },
  eventClick: (args) => {
    console.log(args.event.title);
  },
});
</script>
<template>
  <div class="relative">
    <Notify :notification="notify" />
    <FullCalendar :options="calendarOptions" />
    <div class="absolute top-10" v-if="showEventInput">
      <input
        id="newTItle"
        class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm"
        v-model="newEventTitle"
        type="text"
        placeholder="Event Title"
      />
      <!-- <button
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        @click="addEvent"
      >
        Add Event
      </button> -->
    </div>
  </div>
</template>
