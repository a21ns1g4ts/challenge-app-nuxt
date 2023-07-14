<template>
  <ChallengeCard v-for="(item, index) in items" :value="item" />
</template>

<script lang="ts" setup>
const { items } = useChallenges();
</script>
