export interface UserInfo {
  avatar: string | null;
  name: string | null;
  gender: "male" | "female" | "secret";
  birthdate: string | null;
}
