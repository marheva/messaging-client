import React, { useState } from 'react';
import { ListBody, ListHeader } from './components';
import { ContactAPIListPropsTypes, ListType } from './types';

function ContactAPIList({ contacts, isContactsOnLoad }: ContactAPIListPropsTypes) {
    const [listType, setListType] = useState<ListType>('table')
    const [selectedContacts, setSelectedContacts] = useState<string[]>([])

    // TODO: useCallback
    //
    function onTypeListSelect(value: ListType): void {
        setListType(value)
    }

    // TODO: useCallback
    //
    function onContactsSelect(value: string[]): void {
        setSelectedContacts(value)
    }

    // TODO: useCallback + backend 
    //
    function onDeleteContacts(): void {
        console.log('[onDeleteContacts]', selectedContacts)
    }
    return <>
        <ListHeader
            onSelect={onTypeListSelect}
            selectedType={listType}
            isSelectedContacts={!!selectedContacts?.length}
            onDeleteContacts={onDeleteContacts}
        />
        <ListBody
            type={listType}
            contacts={contacts}
            onContactsSelect={onContactsSelect}
            selectedContacts={selectedContacts}
            isContactsOnLoad={isContactsOnLoad}
        />
    </>
}

export default ContactAPIList;