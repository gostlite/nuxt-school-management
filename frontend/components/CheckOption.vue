<!-- The checkbox component -->
<template>
  <!-- AT THE CHANGE EVENT, A CUSTOM EVENT WAS EMMITTED ALONG WITH A DATA TO THE PARENT  -->
  <div class="flex items-center space-x-4">
    <input
      :value="optionValue"
      type="checkbox"
      :id="optionValue"
      :name="optionValue"
      class="form-checkbox text-purple-950 checked:bg-purple-800 checked:border-transparent"
      @change="
        $emit('modelValue', [
          $event.target.value,
          $event.target.checked ? optionValue : '',
        ])
      "
    />
    <label :for="optionValue" class="cursor-pointer text-purple-950 check_typo">
      {{ props.option }}</label
    >
  </div>
</template>

<script setup>
const props = defineProps({
  option: String,
});

const optionValue = props.option.toLowerCase();
</script>

<style lang="scss" scoped></style>
