<script setup lang="ts">
import MoviesCarousel from "@/components/MoviesCarousel.vue";
import MovieApi from "@/networking/MovieApi";
import {ref} from "vue";
import Movie from "@/models/Movie";
import Serie from "@/models/Serie";
import SerieApi from "@/networking/SerieApi";
import SeriesCarousel from "@/components/SeriesCarousel.vue";

const movies = ref<[Movie]>()
const series = ref<[Serie]>()

MovieApi.getTrending().then(items => movies.value = items.results)
SerieApi.getTrending().then(items => series.value = items.results)
</script>

<template>
  <main>
    <MoviesCarousel title="Films en tendance"  :movies="movies"/>
    <SeriesCarousel title="Series en tendance"  :series="series"/>
  </main>
</template>
