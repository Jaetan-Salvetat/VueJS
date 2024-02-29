<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/free-mode';
import MediaCell from "@/components/MediaCell.vue";
import Media from "@/models/Media";

defineProps<{
  title: string,
  medias: [Media]
}>()

const modules = [FreeMode]
</script>

<template>
  <div class="carousel-container">
    <h2 class="text-h6 carousel-title">{{ title }}</h2>

    <swiper
      slides-per-view="auto"
      :spaceBetween="30"
      :modules="modules"
      :freeMode="true"
      :pagination="{ type: 'progressbar' }"
      class="mySwiper" >

      <swiper-slide v-for="media in medias" v-bind:key="media.id" class="carousel-content">
        <router-link :to="`/movies/${media.id}`">
          <MediaCell :media="media" />
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
