<script setup lang="ts">
import Cast from "@/models/Cast";

defineProps<{
  cast: Cast
}>()
</script>

<template>
  <div class="cast-container mb-5 elevation-7">
    <v-img
      style="width: 180px; height: 250px; object-fit: cover; border-radius: 8px 8px 0 0;"
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${cast.profilePath}`"  alt=""/>

    <span class="text-subtitle-1 text-center cast-title">{{cast.name}}</span>
    <span class="text-body-2 text-medium-emphasis text-center">{{cast.character}}</span>
  </div>
</template>

<style scoped>
.cast-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  width: 180px;
  padding-bottom: 10px;
}

.cast-title {
  padding-top: 10px;
}
</style>
