export default interface ListHeaderPropsTypes {
  userId?: string;
  selectedType?: string;
  isSelectedContacts?: boolean;
  filesToProcessing: string[];
  isFilesOnLoad: boolean;
  onSelect?: (arg: "table" | "list") => void;
  onUploadFinish?: (arg0: string | null, arg1: [boolean, string]) => void;
  onFileDeletingFinish?: (arg0: string, arg1: [boolean, string]) => void;
  onFileProcessingFinish?: (arg0: string, arg1: [boolean, string]) => void;
}
