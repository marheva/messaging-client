export default interface ListBodyPropsTypes {
  type: ListTypes;
  contacts: ContactPropsTypes[];
  selectedContacts: string[];
  isContactsOnLoad: boolean;
  onContactsSelect?: (arg0: string[]) => void;
}

export type BodyTypeTypes = { table: ReactNode; list: ReactNode };
