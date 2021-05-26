import React, { useCallback } from 'react';
import { useToggle } from '../../../hooks';
import { ButtonPrimary } from '../../CustomComponents/Button';

const ADD_CONTACT = 'Add contact'

function AddContact({ contactId, disabled, ...props }: AddContactPropsTypes): JSX.Element {
    const [loading, setLoading] = useToggle();

    const addContact = useCallback(
        () => {
            console.log('[TODO ADD CONTACT]')
        }, [],
    )

    return (
        <ButtonPrimary onClick={addContact} loading={loading} disabled={!!disabled}>{ADD_CONTACT}</ButtonPrimary>
    )

}
export default AddContact