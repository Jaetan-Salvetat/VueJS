<script setup lang="ts">
import {onBeforeRouteUpdate, useRoute} from "vue-router"
import Movie from "@/models/Movie"
import {ref} from "vue"
import MovieApi from "@/networking/MovieApi"
import CastCarousel from "@/components/CastCarousel.vue"
import MoviesCarousel from "@/components/MoviesCarousel.vue"
import MediaHeader from "@/components/MediaHeader.vue";

const route = useRoute()
const movie = ref<Movie|null>()

getMovie(Number(route.params.id))

function getMovie(movieId: number) {
  MovieApi.getMovieDetails(movieId).then(async item => {
    movie.value = {
      ...item,
      cast: (await MovieApi.getCredits(item.id)).cast,
      recommendations: (await MovieApi.getRecommendations(item.id)).results
    }
  })
}

onBeforeRouteUpdate(newRoute => { getMovie(Number(newRoute.params.id)) })
</script>

<template>
  <div style="height: 100%" v-if="movie">
    <MediaHeader :media="movie" />

    <main>
      <v-divider style="margin: 50px 50px" />
      <CastCarousel :casts="movie.cast" />
      <MoviesCarousel title="Recommandations" :movies="movie.recommendations" />
    </main>
  </div>
</template>
