<script setup lang="ts">
import {onBeforeRouteUpdate, useRoute} from "vue-router"
import {ref} from "vue"
import CastCarousel from "@/components/CastCarousel.vue"
import MediaHeader from "@/components/MediaHeader.vue";
import Serie from "@/models/Serie";
import SerieApi from "@/networking/SerieApi";
import SeriesCarousel from "@/components/SeriesCarousel.vue";

const route = useRoute()
const serie = ref<Serie|null>()

getMovie(Number(route.params.id))

function getMovie(movieId: number) {
  SerieApi.getMovieDetails(movieId).then(async item => {
    serie.value = {
      ...item,
      cast: (await SerieApi.getCredits(item.id)).cast,
      recommendations: (await SerieApi.getRecommendations(item.id)).results
    }
  })
}

onBeforeRouteUpdate(newRoute => { getMovie(Number(newRoute.params.id)) })
</script>

<template>
  <div style="height: 100%" v-if="serie">
    <MediaHeader :media="serie" />

    <main>
      <v-divider style="margin: 50px 50px" />
      <CastCarousel :casts="serie.cast" />
      <SeriesCarousel title="Recommandations" :series="serie.recommendations" />
    </main>
  </div>
</template>
