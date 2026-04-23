import { defineStore } from "pinia";
import { ref } from "vue";
import type { UserInfo } from "@/services/UserInfo";

export const useUserStore = defineStore("user", () => {
  const userInfo = ref<UserInfo | null>(null);

  // 从localStorage加载用户信息
  const loadUserInfo = () => {
    const data = localStorage.getItem('userInfo');
    if (data) {
      userInfo.value = JSON.parse(data);
    }
  };

  // 保存用户信息到localStorage
  const saveUserInfo = (info: UserInfo) => {
    userInfo.value = info;
    localStorage.setItem('userInfo', JSON.stringify(info));
  };

  // 初始化时加载
  loadUserInfo();

  return {
    userInfo,
    loadUserInfo,
    saveUserInfo,
  };
});