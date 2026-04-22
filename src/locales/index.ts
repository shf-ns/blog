import { createI18n } from "vue-i18n";
import zhCN from './zh-CN'
import enUS from './en-US'

// 创建i18n实例
export const i18n = createI18n({
  legacy: false, // 使用Composition API模式
  locale: "zh-CN", // 默认语言
  fallbackLocale: "zh-CN", // 回退语言
  messages: {
    "zh-CN": zhCN,
    "en-US": enUS,
  },
});

export default i18n;
export type Language = "zh-CN" | "en-US";
