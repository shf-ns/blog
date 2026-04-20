import type{UserInfo} from '@/services/UserInfo'
/**
 * 将 File/Blob 转换为 Base64 URL
 * file：图像文件
 */
export const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * 处理头像上传
 * @param event
 * @returns
 */
export const handleAatarUpload = async (event: Event): Promise<any> => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  if (!file) return;

  // 验证文件类型
  if (!file.type.startsWith("image/")) {
    alert("请选择图片文件");
    return;
  }

  //创建临时URL用于预览
  const baseUrl = await convertImageToBase64(file);
  return baseUrl;
};

/**
 * 清理临时URL（防止内存泄漏）
 */
export const cleanupAvatarUrl = (avatarUrl: string | null): void => {
  if (avatarUrl) {
    URL.revokeObjectURL(avatarUrl);
    avatarUrl = null;
  }
};
