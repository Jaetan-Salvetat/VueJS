<script setup lang="ts">
import MediaCarousel from "@/components/MediaCarousel.vue";
import MovieApi from "@/networking/MovieApi";
import {ref} from "vue";
import Movie from "@/models/Movie";

const movies = ref<[Movie]>()

MovieApi.getTrending().then(items => movies.value = items.results)
</script>

<template>
  <main>
    <MediaCarousel title="Films en tendance"  :movies="movies"/>
  </main>
</template>
