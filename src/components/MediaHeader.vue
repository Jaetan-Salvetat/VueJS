<script setup lang="ts">
import Movie from "@/models/Movie";
import {computed} from "vue";
import Media from "@/models/Media";

const props = defineProps<{
  media: Media
}>()

const getVoteAsPercent = computed(() => {
  return (props.media.voteAverage ?? 0) * 10
})
</script>

<template>
  <header class="media-header">
    <v-img
      width="300"
      max-width="300"
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${media.backdropPath}`" />

    <div class="media-title-container">
        <span class="text-h6">
          {{ media.title }}
          <span>• {{ media.releaseDate }}</span>
        </span>

      <div class="media-genres-container">
          <span v-for="genre in media.genres" v-bind:key="genre.id" class="media-genre-item bg-blue-accent-1">
          {{ genre.name }}
        </span>
      </div>

      <div class="media-vote-container">
        <v-progress-circular :model-value="getVoteAsPercent" size="60">
          {{ getVoteAsPercent }}%
        </v-progress-circular>

        <span class="text-button">Note des utilisateurs</span>
      </div>

      <p>{{ media.overview }}</p>
    </div>
  </header>
</template>

<style scoped>
.media-header {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 30px;
}
.media-title-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.media-genres-container {
  display: flex;
  gap: 20px;
}

.media-genre-item {
  padding: 4px 8px;
  border-radius: 8px;
}

.media-vote-container {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
