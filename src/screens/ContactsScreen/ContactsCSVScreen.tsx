import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { deleteFile, getFilingFiles } from '../../Api/utils/rest/filing/fetch';
import { getUploadedContacts } from '../../Api/utils/rest/uploadedContacts/fetch';
import ContactCSVList from '../../Components/ContactCSVList';
import { setFilingFiles, removeFile, addFile, } from '../../redux/filingReducer/actions';
import { setUploadedContacts } from '../../redux/uploadedContactsReducer/actions';
import { AppState } from '../../redux/rootReducer';

function ContactsCSVScreen() {
    const [filesLoading, setFilesLoading] = useState<boolean>(false)
    const [contactsLoading, setContactsLoading] = useState<boolean>(false)
    const userId = useSelector(({ user }: AppState) => user.user._id);
    const filesToProcessing = useSelector(({ filing }: AppState) => filing.filesToProcessing);
    const uploadedContacts = useSelector(({ uploadedContacts }: AppState) => uploadedContacts.contacts);
    const dispatch = useDispatch()

    async function fetchUploadedContactsList(userId: string): Promise<[boolean, string] | [boolean, string, ContactPropsTypes[]]> {
        const { data: { error, message, additional } }: any = {} = await getUploadedContacts(userId)
        if (error) return [error, message]
        return [error, message, additional]
    };

    async function fetchFilingFilesList(userId: string): Promise<[boolean, string] | [boolean, string, CSVFiles[]]> {
        const { data: { error, message, additional } }: any = {} = await getFilingFiles(userId)
        if (error) return [error, message]
        return [error, message, additional]
    };

    async function fetchDeleteFile(userId: string, fileName: string): Promise<[boolean, string]> {
        const { data: { error, message } }: any = {} = await deleteFile(userId, fileName)
        if (error) return [error, message]
        return [error, message]
    };

    const loadContacts = useCallback(() => {
        setContactsLoading(true)
        return fetchUploadedContactsList(userId).then(([error, message, additional]) => {
            if (error) {
                setContactsLoading(false)
                return [false, message]
            } else {
                dispatch(setUploadedContacts(additional as unknown as ContactPropsTypes[]))
                setContactsLoading(false)
                return [true, message]
            }
        })
    }, [])

    const loadFiles = useCallback(() => {
        setFilesLoading(true)
        fetchFilingFilesList(userId).then(([error, message, additional]) => {
            if (error) {
                console.log('ERROR', message)
            } else {
                dispatch(setFilingFiles(additional as unknown as CSVFiles[]))
            }
            setFilesLoading(false)
        })
    }, [])

    const deleteFilingFile = useCallback((fileName: string, [error, message]: [boolean, string]) => {
        if (error) return console.log('ERROR', message)
        dispatch(removeFile(fileName))
    }, []);

    const uploadFilingFile = useCallback((fileName: string | null, [error, message]: [boolean, string]) => {
        if (error || !fileName) return console.log('ERROR', message)
        dispatch(addFile(fileName))
    }, [])

    const processFilingFile = useCallback(async (fileName: string, [processingError, processingMessage]: [boolean, string]) => {
        if (processingError) return console.log('ERROR', processingMessage)
        if (!userId || processingError || !fileName) return
        const [error, message] = await loadContacts()
        if (!error) return console.log('ERROR', error)
        fetchDeleteFile(userId, fileName).then(([error, message]) => {
            if (error) return console.log('ERROR', error)
            deleteFilingFile(fileName, [error, message])
        })

    }, []);

    useEffect(() => {
        loadContacts()
        loadFiles()
    }, [])

    return <>
        <ContactCSVList
            userId={userId}
            contacts={uploadedContacts}
            isFilesOnLoad={filesLoading}
            isContactsOnLoad={contactsLoading}
            processingFiles={filesToProcessing}
            deleteFilingFile={deleteFilingFile}
            uploadFilingFile={uploadFilingFile}
            processFilingFile={processFilingFile}

        />
    </>
}

export default ContactsCSVScreen;
