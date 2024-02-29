<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";
import AutoComplete from "@/models/AutoComplete";
import AutoCompleteApi from "@/networking/AutoCompleteApi";

const route = useRoute()
const medias = ref<[AutoComplete]>()
</script>

<template>

</template>

<style scoped>

</style>
