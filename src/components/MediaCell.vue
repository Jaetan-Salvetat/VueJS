<script setup lang="ts">
import Movie from "@/models/Movie";

defineProps<{
  movie: Movie
}>()
</script>

<template>
  <div class="media-item-container mb-5 elevation-7">
    <img
      width="180"
      :src="`https://image.tmdb.org/t/p/w150_and_h225_bestv2/${movie.backdropPath}`" alt=""/>

    <span class="text-body-2 text-center">{{ movie.title }}</span>
  </div>
</template>

<style scoped>
.media-item-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 180px;
  border-radius: 8px;
  padding-bottom: 10px;
  transition: scale .2s;
}

.media-item-container:hover {
  scale: 1.1;
  transition: scale .2s;
}

.media-item-container img {
  border-radius: 8px 8px 0;
}
</style>
