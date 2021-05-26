import React from 'react';
import { Radio, Space, Typography } from 'antd';
import { FileOutlined } from '@ant-design/icons';
import Wrapper from '../../../CustomComponents/Wrapper';
import ListHeaderPropsTypes from './types'
import { UploadFile, ProcessFile } from '../../../Filing';
import DeleteFile from '../../../Filing/DeleteFile';
import Spinner from '../../../CustomComponents/Spinner';

const FILTERS_TYPES = {
    TABLE: 'table',
    LIST: 'list'
}

const PROCESSING_TITLE = 'Files to processing: '

function ListHeader({
    userId,
    selectedType,
    filesToProcessing,
    isSelectedContacts,
    isFilesOnLoad,
    onSelect,
    onUploadFinish,
    onFileDeletingFinish,
    onFileProcessingFinish
}: ListHeaderPropsTypes) {

    return (
        <>
            <Wrapper>
                <Space align="baseline">
                    <Radio.Group defaultValue={selectedType} onChange={({ target: { value } }) => {
                        !!onSelect && onSelect(value);
                    }}
                        value={selectedType}>
                        <Radio value={'table'}>{FILTERS_TYPES.TABLE}</Radio>
                        <Radio value={'list'}>{FILTERS_TYPES.LIST}</Radio>
                    </Radio.Group>
                    <UploadFile userId={userId} accept='.csv' listType="text" onCallback={onUploadFinish} />
                </Space>
            </Wrapper>
            <Wrapper>
                <Space align="baseline">
                    <p>{PROCESSING_TITLE}</p>
                    {
                        isFilesOnLoad
                            ? <Spinner />
                            : filesToProcessing.map(element => (
                                <Wrapper>
                                    <Space>
                                        <Typography className="ant-form-text" >
                                            <FileOutlined /> {element ? element : 'Error'}
                                        </Typography>
                                        <ProcessFile key={1} userId={userId} fileName={element} onCallback={onFileProcessingFinish} />
                                        <DeleteFile key={2} userId={userId} fileName={element} onCallback={onFileDeletingFinish} />
                                    </Space>
                                </Wrapper>
                            ))
                    }
                </Space>
            </Wrapper>
        </>
    )
}

export default ListHeader;