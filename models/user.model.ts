export default interface User {
  id: string;
  name: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  birthDay: string;
  languages: string[];
  profilePictureUrl: string;
}
