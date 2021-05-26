interface UploadFilePropsTypes {
  userId?: string;
  accept: string;
  listType: "picture" | "text" | "picture-card";
  onCallback?: (arg0: string | null, arg1: [boolean, string]) => void;
}
