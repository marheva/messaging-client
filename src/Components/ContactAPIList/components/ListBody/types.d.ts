import { ReactNode } from "react";

export interface ListBodyPropsTypes {
  type: ListType;
  contacts: ContactPropTypes[];
  selectedContacts: string[];
  isContactsOnLoad: boolean;
  onContactsSelect?: (arg0: string[]) => void;
}

export type BodyTypeTypes = { table: ReactNode; list: ReactNode };
