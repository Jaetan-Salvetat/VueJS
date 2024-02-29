<script setup lang="ts">
import MediaCarousel from "@/components/MediaCarousel.vue";
import MovieApi from "@/networking/MovieApi";
import {ref} from "vue";
import Media from "@/models/Media";

const movies = ref<[Media]>()

MovieApi.getTrending().then(items => movies.value = items.results)
</script>

<template>
  <main>
    <MediaCarousel title="Films en tendance"  :medias="movies"/>
  </main>
</template>
