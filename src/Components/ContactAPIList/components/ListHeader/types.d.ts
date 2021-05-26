interface ListHeaderPropsTypes {
  onSelect?: (arg: ListType) => void;
  onDeleteContacts?: () => void;
  selectedType?: ListType;
  isSelectedContacts: boolean;
  userId?: string;
}
