import React from 'react';
import { Radio, Space } from 'antd';
import { ButtonDanger, ButtonPrimary } from '../../../CustomComponents/Button';
import Wrapper from '../../../CustomComponents/Wrapper';
import { AddContact } from '../../../Contacts';

const FILTERS_TYPES = {
    TABLE: 'table',
    LIST: 'list'
}

const DELETE_CONTACT_BUTTON_TITLE = 'Delete'
const SEND_SMS_BUTTON_TITLE = 'SMS'

function ListHeader({
    userId,
    onSelect,
    selectedType,
    isSelectedContacts,
    onDeleteContacts
}: ListHeaderPropsTypes) {
    return (
        <>
            <Wrapper>
                <Space>
                    <Radio.Group defaultValue={selectedType} onChange={({ target: { value } }) => {
                        !!onSelect && onSelect(value);
                    }}
                        value={selectedType}>
                        <Radio value={'table'}>{FILTERS_TYPES.TABLE}</Radio>
                        <Radio value={'list'}>{FILTERS_TYPES.LIST}</Radio>
                    </Radio.Group>
                </Space>
                <Space>
                    <ButtonPrimary disabled={!isSelectedContacts}>{SEND_SMS_BUTTON_TITLE}</ButtonPrimary>
                    <ButtonDanger onClick={onDeleteContacts} disabled={!isSelectedContacts}>{DELETE_CONTACT_BUTTON_TITLE}</ButtonDanger>
                    <AddContact disabled />
                </Space>
            </Wrapper>
        </>
    )
}

export default ListHeader;