interface ContactAPIListPropsTypes {
  contacts: ContactsPropsTypes[];
  isContactsOnLoad: boolean;
}

type ListTypes = ["table", "list"];

export type ListType = typeof ListTypes;
