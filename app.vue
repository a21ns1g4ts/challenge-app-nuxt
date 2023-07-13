<template>
  <v-app>
  <v-layout ref="app" class="rounded rounded-md">
    <v-app-bar color="grey-lighten-2" name="app-bar" title="challenge-app">
       <!-- content here -->
       Bar content
    </v-app-bar>

    <v-navigation-drawer
      color="grey-darken-2"
      permanent
      name="drawer"
    >
      <div class="d-flex justify-center align-center h-100">
        <!-- content here -->
        Navigation content
      </div>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <NuxtPage />
    </v-main>

    <v-footer
      app
      name="footer"
    >
     <!-- content here -->
     Footer content
    </v-footer>
  </v-layout>
</v-app>
</template>

<script lang="ts" setup>
</script>
