import React, { useState } from 'react';
import { useToggle } from '../../../hooks';
import { ButtonDanger } from '../../CustomComponents/Button';

const DELETE_CONTACT = 'Delete'

function DeleteContact({ contactId, ...props }: DeleteContactPropsTypes): JSX.Element {
    const [loading, setLoading] = useToggle();

    // TODO:
    //
    function deleteContact() {
        console.log('[TODO DELETE CONTACT]')
    }
    return (
        <ButtonDanger onClick={deleteContact} loading={loading}>{DELETE_CONTACT}</ButtonDanger>
    )

}
export default DeleteContact