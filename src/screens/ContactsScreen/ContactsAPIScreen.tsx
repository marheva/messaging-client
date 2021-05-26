import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { AppState } from '../../redux/rootReducer';
import { getContacts } from '../../Api/utils/rest/contacts/fetch';
import ContactAPIList from '../../Components/ContactAPIList';

function ContactsAPIScreen() {
    const [contacts, setContacts] = useState<ContactPropsTypes[]>([])
    const [contactsLoading, setContactsLoading] = useState<boolean>(false)
    const userId = useSelector(({ user }: AppState) => user.user._id);

    async function fetchContacts(userId: string): Promise<[boolean, string] | [boolean, string, ContactPropsTypes]> {
        const { data: { error, message, additional } }: any = {} = await getContacts(userId)
        if (error) return [error, message]
        return [error, message, additional]
    };

    useEffect(() => {
        setContactsLoading(true)
        fetchContacts(userId).then(([error, message, additional]) => {
            if (error) {
                console.log('ERROR', message)
            } else {
                setContacts(additional as unknown as ContactPropsTypes[])
            }
            setContactsLoading(false)
        })
    }, [])

    return <>
        { <ContactAPIList contacts={contacts} isContactsOnLoad={contactsLoading} />}
    </>


}

export default ContactsAPIScreen;
