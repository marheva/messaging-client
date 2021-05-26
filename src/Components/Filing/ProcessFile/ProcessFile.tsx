import React, { useState } from 'react';
import { Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { ButtonGhost } from '../../CustomComponents/Button';
import ProcessFileWrapper from './ProcessFileWrapper';
import Popover from '../../CustomComponents/Popover';
import Popconfirm from '../../CustomComponents/Popconfirm';
import { createUploadedContacts } from '../../../Api/utils/rest/uploadedContacts/fetch';
import { useToggle } from '../../../hooks';

const FILE_PROCESSING_TITLE = 'Process file?'
const FILE_PROCESSING_POPUP_CONTENT = 'Process'

function ProcessFile({ fileName, userId, onCallback }: ProcessFilePropsTypes): JSX.Element {
    const [isLoading, setIsLoading] = useToggle()
    const [isVisible, setIsVisible] = useToggle()


    async function fetchProcessFile(userId?: string, fileName?: string): Promise<[boolean, string] | [boolean, string, CSVFiles[]]> {
        if (!userId || !fileName) return [true, ' User id or Filename can not find.']
        const { data: { error, message, additional } }: any = {} = await createUploadedContacts(userId, fileName)
        if (error) return [error, message]
        return [error, message, additional]
    };
    const onProcessFile = async (fileName: string, userId?: string) => {
        setIsLoading(true)
        const [error, message] = await fetchProcessFile(userId, fileName)

        if (error) {
            !!onCallback && onCallback(fileName, [true, message])
        } else {
            !!onCallback && onCallback(fileName, [false, message])
        }
        setIsLoading(false)
        setIsVisible(false)
    }

    return (
        <ProcessFileWrapper>
            <Space>
                <Popconfirm
                    title={FILE_PROCESSING_TITLE}
                    okButtonProps={{ loading: isLoading }}
                    cancelButtonProps={{ disabled: isLoading }}
                    onConfirm={() => onProcessFile(fileName, userId)}
                    onCancel={() => setIsVisible(false)}
                    visible={isVisible}
                >
                    <Popover content={FILE_PROCESSING_POPUP_CONTENT}>
                        <ButtonGhost icon={<SettingOutlined />} onClick={() => setIsVisible(true)} />
                    </Popover>
                </Popconfirm>
            </Space>
        </ProcessFileWrapper>
    )
};

export default ProcessFile