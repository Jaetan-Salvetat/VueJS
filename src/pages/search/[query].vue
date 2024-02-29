<script setup lang="ts">
import {onBeforeRouteUpdate, useRoute} from "vue-router"
import {ref} from "vue"
import MovieApi from "@/networking/MovieApi";
import Media from "@/models/Media";
import {MediaType} from "@/models/MediaType";
import SerieApi from "@/networking/SerieApi";

const route = useRoute()
const medias = ref<[Media]>()

search(String(route.params.query))

function search(query: string) {
  MovieApi.search(query).then(result => {
    medias.value = result.results
    medias.value?.sort()
  })

  SerieApi.search(query).then(result => {
    result.results.forEach(value => {
      medias.value?.push(value)
    })

    medias.value?.sort()
  })
}

onBeforeRouteUpdate(guard => search(String(guard.params.query)))
</script>

<template>
  <main class="search-container">
    <div v-for="media in medias" v-bind:key="media.id">
      <div v-if="media.backdropPath && media.mediaType != MediaType.person" class="media-container elevation-5">
        <img
          width="100"
          :src="`https://image.tmdb.org/t/p/w150_and_h225_bestv2/${media.backdropPath}`"  alt=""/>

        <div class="media-title-container">
          <router-link :to="`/movies/${media.id}`">
            <span class="text-subtitle-1">{{ media.title }}</span>
          </router-link>
          <span class="text-subtitle-1 text-medium-emphasis">{{ media.releaseDate }}</span>
          <p style="text-overflow: ellipsis" class="text-body-2 text-medium-emphasis">
            {{ media.overview }}
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

.media-type-item {
  padding: 4px 8px;
  border-radius: 8px;
}
</style>
