import React, { useMemo } from 'react';
import { Space, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Table from '../../../../../CustomComponents/Table';

const SEND_SMS_ACTION_TITLE = 'SMS'

function TableType({ contacts, onContactsSelect, selectedContacts, loading }: TableTypePropTypes[] & any) {
    const columns: ColumnsType<'ContactPropTypes' | any> = [
        {
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
            render: (text: string) => <span>{text}</span>,
        },
        {
            title: 'Company Name',
            dataIndex: 'company_name',
            key: 'company_name',
            render: (text: string) => <span>{text}</span>,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: 'ZIP',
            dataIndex: 'zip',
            key: 'zip',
        },
        {
            title: 'Phones',
            dataIndex: 'phones',
            key: 'phones',
            render: (phones: any) => {
                return <Space direction={'vertical'}>{phones.map((phone?: string) => {
                    if (phone) return <span>{phone}</span>
                })}</Space>
            },
        },
        {
            title: 'Emails',
            dataIndex: 'emails',
            key: 'emails',
            render: (emails: any) => {
                return <Space direction={'vertical'}>{emails.map((email?: string) => {
                    if (email) return <span>{email}</span>
                })}</Space>
            },
        },
        {
            title: 'Category',
            key: 'category',
            dataIndex: 'category',
            render: (text: any) => <span>{text}</span>,
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle"><a>{SEND_SMS_ACTION_TITLE}</a></Space>
            ),
        },
    ];
    const data = useMemo(() => {
        if (!contacts) return
        const modifyFieldsArray = ["phone", "email", 'phone_1', 'email_1'];
        return contacts.map((contact: any) => {
            const modifiedFields = Object.keys(contact).reduce((object: any, key) => {
                if (!modifyFieldsArray.includes(key)) {
                    object[key] = contact[key];
                } else {
                    object.information = { ...object.information, [key]: contact[key] };
                }
                return object;
            }, {});
            const { first_name, last_name, company_name, address, city, country, state, zip, information, category, action, deleting } = modifiedFields || {}
            return {
                first_name,
                last_name,
                company_name,
                address,
                city,
                country,
                state,
                zip,
                phones: [...Object.keys(information).map((element: any) => element.includes('phone') && information[element])],
                emails: [...Object.keys(information).map((element: any) => element.includes('email') && information[element])],
                category: category?.name,
                key: first_name
            }
        })
    }, [contacts])
    const onSelectChange = (selectedContacts: string[]) => {
        console.log('selectedContacts changed: ', selectedContacts);
        onContactsSelect(selectedContacts)

    };
    const rowSelection = {
        selectedContacts,
        onChange: onSelectChange,
    };

    return <Table
        rowSelection={rowSelection}
        dataSource={data}
        columns={columns}
        loading={!!loading && loading}
        size="small"
    />
}

export default TableType;