import React, { useCallback, useState } from 'react';
import Upload, { RcFile } from 'antd/lib/upload';
import { UploadOutlined } from '@ant-design/icons';
import { Form, FormItem } from '../../CustomComponents/Form';
import { ButtonGhost } from '../../CustomComponents/Button';
import { postUploadFile } from '../../../Api/utils/rest/filing/fetch';

const UPLOAD_BUTTON_TITLE = 'Upload'

function UploadFile({ userId, accept, listType, onCallback }: UploadFilePropsTypes): JSX.Element {
    const [uploadedFileList, setUploadedFileList] = useState<RcFile[]>([])

    function onFormChange(list: RcFile[] | any) {
        const { fileList } = {} = list
        setUploadedFileList(fileList)
    };

    async function fetchUploadFile(userId: string, requestFormData: FormData): Promise<[boolean, string, string | null]> {
        const { data: { error, message, additional } }: any = {} = await postUploadFile(userId, requestFormData)
        if (error) return [error, message, null]
        return [error, message, additional]
    };

    const onUpdateFile = useCallback(async (options: any): Promise<any> => {
        const { onSuccess, onError, file } = {} = options;
        const requestFormData = new FormData();
        requestFormData.set("file", file);

        if (!userId || !requestFormData) return setUploadedFileList([])
        const [error, message, additional] = await fetchUploadFile(userId, requestFormData)

        if (error) {
            setUploadedFileList([])
            !!onCallback && onCallback(null, [true, message])
            return onError({ message })
        };
        setTimeout(() => {
            setUploadedFileList([])
            !!onCallback && onCallback(additional, [false, message])
            return onSuccess(message);
        }, 2000);

    }, [])

    return (
        <Form
            onValuesChange={({ fileList } = {}) => onFormChange(fileList)}
        >
            <FormItem name={'fileList'} >
                <Upload
                    accept={accept}
                    listType={listType}
                    fileList={uploadedFileList}
                    customRequest={onUpdateFile}
                >
                    <ButtonGhost icon={<UploadOutlined />}>{UPLOAD_BUTTON_TITLE}</ButtonGhost>
                </Upload>
            </FormItem>
        </Form>
    )
};

export default UploadFile