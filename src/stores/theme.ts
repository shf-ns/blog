import { ref } from "vue";
import { defineStore } from "pinia";
import type { Theme } from "@/types/Theme";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref<Theme>("light");

  function saveTheme(themeValue: Theme) {
    localStorage.setItem("Theme", themeValue);
    theme.value = themeValue;
  }

  function getTheme(): Theme {
    return (localStorage.getItem("Theme") as Theme) || "light";
  }

  return { theme, saveTheme, getTheme };
});
