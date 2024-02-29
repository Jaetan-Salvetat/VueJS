<script setup lang="ts">
import { ref } from "vue"
import {AppTheme, useThemeStore} from "@/stores/theme"

const searchValue = ref("")
const useTheme = useThemeStore()

</script>

<template>
  <v-app-bar class="nav-bar">
    <v-combobox
      v-model="searchValue"
      label="Rechercher"
      variant="solo"
      prepend-icon="mdi-search-web" />

    <v-app-bar-title />

    <div class="nav-bar-items">
      <v-select
        label="Theme"
        variant="solo"
        :items="Object.values(AppTheme)"
        :model-value="useTheme.theme"
        @update:modelValue="useTheme.themeHandler" />
    </div>
  </v-app-bar>
</template>

<style scoped>
.nav-bar {
  padding: 20px 20px 0;
}

.nav-bar-items {
  display: flex;
  padding-right: 20px;
}
</style>
