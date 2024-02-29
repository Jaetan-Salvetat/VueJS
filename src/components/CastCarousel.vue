<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/free-mode';
import Cast from "@/models/Cast";
import CastCell from "@/components/CastCell.vue";

defineProps<{
  casts: [Cast]
}>()

const modules = [FreeMode]
</script>

<template>
  <div class="carousel-container">
    <h2 class="text-h6 carousel-title">Têtes d'affiche</h2>

    <swiper
      slides-per-view="auto"
      :spaceBetween="30"
      :modules="modules"
      :freeMode="true"
      :pagination="{ type: 'progressbar' }"
      class="mySwiper" >

      <swiper-slide v-for="cast in casts" v-bind:key="cast.id" class="carousel-content">
        <CastCell :cast="cast" />
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
