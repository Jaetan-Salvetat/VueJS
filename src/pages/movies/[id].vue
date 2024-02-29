<script setup lang="ts">
import {useRoute} from "vue-router";
import Media from "@/models/Media";
import {computed, ref} from "vue";
import MovieApi from "@/networking/MovieApi";
import CastCarousel from "@/components/CastCarousel.vue";
import MediaCarousel from "@/components/MediaCarousel.vue";

const route = useRoute()
const movie = ref<Media>()

MovieApi.getMovieDetails(Number(route.params.id)).then(async item => {
  movie.value = {
    ...item,
    cast: (await MovieApi.getCredits(item.id)).cast,
    recommendations: (await MovieApi.getRecommendations(item.id)).results
  }
})

const getVoteAsPercent = computed(() => {
  return (movie.value?.voteAverage ?? 0) * 10
})
</script>

<template>
  <div style="height: 100%" v-if="movie">
    <header class="media-header">
      <v-img
        width="300"
        max-width="300"
        :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.backdropPath}`" />

      <div class="media-title-container">
        <span class="text-h6">
          {{ movie.title }}
          <span>• {{ movie.releaseDate }}</span>
        </span>

        <div class="media-genres-container">
          <span v-for="genre in movie.genres" v-bind:key="genre.id" class="media-genre-item bg-blue-accent-1">
          {{ genre.name }}
        </span>
        </div>

        <div class="media-vote-container">
          <v-progress-circular :model-value="getVoteAsPercent" size="60">
            {{ getVoteAsPercent }}%
          </v-progress-circular>

          <span class="text-button">Note des utilisateurs</span>
        </div>

        <p>{{ movie.overview }}</p>
      </div>
    </header>

    <main>
      <v-divider style="margin: 50px 50px" />
      <CastCarousel :casts="movie.cast" />

      <MediaCarousel title="Recommandations" :medias="movie.recommendations" />
    </main>
  </div>
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
