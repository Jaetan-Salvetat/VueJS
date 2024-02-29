<script setup lang="ts">
import {onBeforeRouteUpdate, useRoute} from "vue-router"
import {ref} from "vue"
import MovieApi from "@/networking/MovieApi";
import Movie from "@/models/Movie";

const route = useRoute()
const movies = ref<[Movie]>()

search(String(route.params.query))

function search(query: string) {
  MovieApi.search(query).then(result => {
    movies.value = result.results
  })
}

onBeforeRouteUpdate(guard => search(String(guard.params.query)))
</script>

<template>
  <main class="search-container">
    <div v-for="movie in movies" v-bind:key="movie.id">
      <div v-if="movie.backdropPath" class="media-container elevation-5">
        <img
          width="100"
          :src="`https://image.tmdb.org/t/p/w150_and_h225_bestv2/${movie.backdropPath}`"  alt=""/>

        <div class="media-title-container">
          <router-link :to="`/movies/${movie.id}`">
            <span class="text-subtitle-1">{{ movie.title }}</span>
          </router-link>
          <span class="text-subtitle-1 text-medium-emphasis">{{ movie.releaseDate }}</span>
          <p style="text-overflow: ellipsis" class="text-body-2 text-medium-emphasis">
            {{ movie.overview }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.search-container {
  padding: 0 50px;
}

.media-container {
  display: flex;
  border-radius: 8px;
  gap: 15px;
  margin-bottom: 30px;
}

.media-container img {
  border-radius: 8px 0 0 8px;
}

.media-title-container {
  display: flex;
  flex-direction: column;
}
</style>
