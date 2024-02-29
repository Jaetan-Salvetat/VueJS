<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/free-mode';
import MediaCell from "@/components/MediaCell.vue";
import Movie from "@/models/Movie";
import {onBeforeRouteUpdate} from "vue-router";
import Serie from "@/models/Serie";

defineProps<{
  title: string,
  series: [Serie]
}>()

const modules = [FreeMode]
</script>

<template>
  <div class="carousel-container" v-if="series.length">
    <h2 class="text-h6 carousel-title">{{ title }}</h2>

    <swiper
      slides-per-view="auto"
      :spaceBetween="30"
      :modules="modules"
      :freeMode="true"
      :pagination="{ type: 'progressbar' }"
      class="mySwiper" >

      <swiper-slide v-for="serie in series" v-bind:key="serie.id" class="carousel-content">
        <router-link :to="`/tv/${serie.id}`">
          <MediaCell :movie="serie" />
        </router-link>
      </swiper-slide>

    </swiper>
  </div>
</template>

<style scoped>
.carousel-title {
  margin-left: 50px;
}

.carousel-content {
  margin-top: 20px;
  padding-left: 50px;
}

.swiper-pagination-bullets {
  display: none;
}

.swiper-slide {
  height: auto;
  width: auto;
}
</style>
