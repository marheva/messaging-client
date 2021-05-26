interface ContactCSVPropTypes {
  contacts: ContactPropsTypes[];
  userId?: string;
  processingFiles: string[];
  isFilesOnLoad: boolean;
  isContactsOnLoad: boolean;
  deleteFilingFile: (arg0: string, arg1: [boolean, string]) => void;
  uploadFilingFile: (arg0: string | null, arg1: [boolean, string]) => void;
  processFilingFile: (arg0: string, arg1: [boolean, string]) => void;
}

type ListTypes = ["table", "list"];

export type ListType = typeof ListTypes;
