interface TableTypePropTypes {
  contacts: ContactPropTypes[] | any;
  selectedContacts: string[];
  loading?: boolean;
  onContactsSelect?: (arg0: string[]) => void;
}
