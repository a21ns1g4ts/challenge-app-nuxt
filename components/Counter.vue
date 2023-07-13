<template>
  <v-btn
    color="primary"
    min-width="228"
    rel="noopener noreferrer"
    size="x-large"
    target="_blank"
    variant="flat"
    @click="inc"
  >
    <v-icon icon="mdi-speedometer" size="large" start />

    Count is: {{ count }}
  </v-btn>
</template>

<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>
