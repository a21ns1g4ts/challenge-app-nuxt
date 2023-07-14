<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="600">
        <v-toolbar>
          <template v-slot:prepend>
            <v-btn icon="$menu"></v-btn>
          </template>

          <v-toolbar-title class="text-h6">{{ value.title }}</v-toolbar-title>

          <template v-slot:append>
            <v-btn icon="mdi-dots-vertical"></v-btn>
          </template>
        </v-toolbar>

        <v-img
          height="300"
          src="https://cdn.pixabay.com/photo/2019/03/24/16/30/cup-4078017_960_720.jpg"
          cover
        />

        <ChallengeSteps :value="value.steps" />
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const props = defineProps(['value']);
</script>
