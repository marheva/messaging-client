import React, { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { ButtonGhost } from '../../CustomComponents/Button';
import { deleteFile } from '../../../Api/utils/rest/filing/fetch';
import Popover from '../../CustomComponents/Popover';
import Popconfirm from '../../CustomComponents/Popconfirm';
import { Space } from 'antd';
import DeleteFileWrapper from './DeleteFileWrapper';
import { useToggle } from '../../../hooks';

const FILE_DELETING_TITLE = 'Delete file?'
const FILE_DELETING_POPUP_CONTENT = 'Delete'

function DeleteFile({ fileName, userId, onCallback }: DeleteFilePropsTypes): JSX.Element {
    const [isLoading, setIsLoading] = useToggle()
    const [isVisible, setIsVisible] = useToggle()

    async function fetchDeleteFile(userId: string, fileName: string): Promise<[boolean, string]> {
        const { data: { error, message } }: any = {} = await deleteFile(userId, fileName)
        if (error) return [error, message]
        return [error, message]
    };

    const onDeleteFile = async (fileName?: string, userId?: string) => {
        setIsLoading(true)
        if (!userId || !fileName) return
        const [error, message] = await fetchDeleteFile(userId, fileName)
        if (error) {
            !!onCallback && onCallback(fileName, [true, message])
        } else {
            !!onCallback && onCallback(fileName, [false, message])
        }
        setIsLoading(false)
        setIsVisible(false)
    }

    return (
        <DeleteFileWrapper>
            <Space>
                <Popconfirm
                    title={FILE_DELETING_TITLE}
                    okButtonProps={{ loading: isLoading }}
                    cancelButtonProps={{ disabled: isLoading }}
                    onConfirm={() => onDeleteFile(fileName, userId)}
                    onCancel={() => setIsVisible(false)}
                    visible={isVisible}
                >
                    <Popover content={FILE_DELETING_POPUP_CONTENT}>
                        <ButtonGhost icon={<DeleteOutlined />} onClick={() => setIsVisible(true)} />
                    </Popover>
                </Popconfirm>
            </Space>
        </DeleteFileWrapper>
    )
};

export default DeleteFile