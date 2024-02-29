import {defineStore} from "pinia";
import {ref} from "vue";
import {useTheme} from "vuetify";

export enum AppTheme {
  dark = "Dark",
  light = "Light"
}

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem("theme") ?? AppTheme.dark)
  const vuetifyTheme = useTheme()

  function themeHandler(newTheme: AppTheme) {
    theme.value = newTheme
    implementTheme()
  }

  function implementTheme() {
    localStorage.setItem("theme", theme.value)
    vuetifyTheme.global.name.value = theme.value.toLowerCase()
  }

  return { theme, themeHandler, implementTheme }
})
