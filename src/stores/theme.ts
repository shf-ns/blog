import { defineStore } from "pinia";
import { ref, computed } from "vue";

export type ThemeMode = "light" | "dark";

export const useThemeStore = defineStore("theme", () => {
  //主题的模式
  const themeMode = ref<ThemeMode>("light");

  //计算属性：根据主题生成css变量
  const cssVariables = computed(() => {
    if (themeMode.value === "light") {
      /**
       * 主题设计规范
       * 每套主题包含完整的语义化颜色 Token
       *
       * 命名规范：
       * - bg-*: 背景色（primary 主背景，secondary 卡片/浮层，tertiary 悬停背景）
       * - text-*: 文字色（primary 主文字，secondary 辅助文字，tertiary 禁用/提示）
       * - accent-*: 品牌色（默认、悬停、激活状态）
       * - border-color: 边框/分割线
       * - shadow-color: 阴影颜色（带透明度）
       * - error/warning/success: 功能色
       */
      return {
        "--primary-color": "#007bff",
        "--secondary-color": "#6c757d",
        "--background-color": "#ffffff",
        "--text-color": "#333333",
        "--sidebar-bg": "#f9fbfc",
        "--card-bg": "#ffffff",
        "--border-color": "#e0e0e0",
      };
    } else {
      return {
        "--primary-color": "#4dabf7",
        "--secondary-color": "#868e96",
        "--background-color": "#1a1a1a",
        "--text-color": "#ffffff",
        "--sidebar-bg": "#2d2d2d",
        "--card-bg": "#2d2d2d",
        "--border-color": "#404040",
      };
    }
  });

  //切换主题
  const toggleTheme = (mode: ThemeMode) => {
    //如果有指定模式则使用，否则切换当前模式
    if (mode) {
      themeMode.value = mode;
    } else {
      themeMode.value = themeMode.value === "light" ? "dark" : "light";
    }

    //将所选的主题存入本地存储当中
    localStorage.setItem("theme-mode", themeMode.value);

    applyCssVariables();
  };

  //应用css变量
  const applyCssVariables = () => {
    // 返回 document 的根元素
    const root = document.documentElement;
    const variables = cssVariables.value;

    Object.entries(variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  //初始化主题
  const initializeTheme = () => {
    const saveTheme = localStorage.getItem("theme-mode") as ThemeMode;

    if (saveTheme) {
      themeMode.value = saveTheme;
    }

    applyCssVariables();
  };

  return {
    themeMode,
    cssVariables,
    toggleTheme,
    initializeTheme,
  };
});
