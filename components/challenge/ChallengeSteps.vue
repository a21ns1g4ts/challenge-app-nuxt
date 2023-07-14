<template>
  <v-row>
    <v-col class="pa-12 mt-8">
      <v-range-slider
        :ticks="ticks"
        :model-value="stepIndexes"
        disabled
        min="0"
        max="3"
        step="1"
        show-ticks="always"
        thumb-label="always"
        tick-size="4"
      >
        <template #thumb-label="{ modelValue }">
          {{ getStepPoints(modelValue) }}
          <!-- <v-icon theme="dark" :icon="icon(modelValue)"></v-icon> -->
        </template>
      </v-range-slider>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
const props = defineProps(['value']);

const stepIndexes = computed(() => props.value.map((step, index) => index));

const ticks = computed(() => {
  return props.value.reduce((obj, step, index) => {
    obj[index] = step.title;
    return obj;
  }, {});
});

function getStepPoints(index) {
  return props.value[index].points;
}

function icon(val) {
  console.log(val);
  // return props.value[val].icon;
}
</script>
