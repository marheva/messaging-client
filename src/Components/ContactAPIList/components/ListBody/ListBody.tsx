import React, { useMemo } from 'react';
import { TableType } from './BodyTypes';
import { BodyTypeTypes, ListBodyPropsTypes } from './types';

const DEFAULT_BODY_TYPE = 'table'

function ListBody({
    type,
    contacts,
    onContactsSelect,
    selectedContacts,
    isContactsOnLoad
}: ListBodyPropsTypes) {

    const bodyTypes: BodyTypeTypes | any = {
        table: <TableType
            contacts={contacts}
            onContactsSelect={onContactsSelect}
            selectedContacts={selectedContacts}
            loading={isContactsOnLoad}
        />,
        list: <h1>List!</h1>
    }

    const bodyType = useMemo(() => {
        if (type) return bodyTypes[type]
        return DEFAULT_BODY_TYPE
    }, [type, isContactsOnLoad])

    return bodyType
}

export default ListBody;