<template>
  <v-app>
    <TopBar />

    <v-main class="page-content">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import {useThemeStore} from "@/stores/theme";
  import TopBar from "@/components/TopBar.vue";

  const useTheme = useThemeStore()
  useTheme.implementTheme()
</script>

<style scoped>
  .page-content {
    margin-top: 50px;
  }
</style>
