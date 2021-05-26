import React, { useCallback, useRef, useState } from 'react';
import { useResizeObserver } from '../../hooks';
import ListBody from './components/ListBody';
import ListHeader from './components/ListHeader';
import { ContactCSVPropTypes, ListType } from './types';

function ContactCSVList({
    contacts,
    userId,
    processingFiles,
    isFilesOnLoad,
    isContactsOnLoad,
    deleteFilingFile,
    uploadFilingFile,
    processFilingFile,
}: ContactCSVPropTypes) {
    const [listType, setListType] = useState<ListType>('table')
    const [selectedContacts, setSelectedContacts] = useState<string[]>([])
    const elementRef = useRef<HTMLDivElement | null>(null)
    const elementHeight = useResizeObserver(elementRef, { height: true }).height

    const onTypeListSelect = useCallback((value: ListType) => {
        setListType(value)
    }, [])

    const onContactsSelect = useCallback((contacts: string[]) => {
        setSelectedContacts(contacts)
    }, [])

    return <>
        <div ref={elementRef}>
            {JSON.stringify(elementHeight)}
            <ListHeader
                userId={userId}
                selectedType={listType}
                isSelectedContacts={!!selectedContacts?.length}
                onSelect={onTypeListSelect}
                filesToProcessing={processingFiles}
                isFilesOnLoad={isFilesOnLoad}
                onUploadFinish={uploadFilingFile}
                onFileDeletingFinish={deleteFilingFile}
                onFileProcessingFinish={processFilingFile}

            />
            <ListBody
                type={listType}
                contacts={contacts}
                selectedContacts={[]}
                isContactsOnLoad={isContactsOnLoad}
                onContactsSelect={onContactsSelect}
            />
        </div>
    </>
}

export default ContactCSVList;