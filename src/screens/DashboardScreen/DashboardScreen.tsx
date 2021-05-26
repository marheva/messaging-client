import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Col, Row, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { getMessagingType, postSendTwilioSMS } from '../../Api/utils/rest/messaging/fetch';
import { ButtonPrimary } from '../../Components/CustomComponents/Button';
import { AppState } from '../../redux/rootReducer';


function DashboardScreen() {
    const allowedMessagingTypes = useSelector(({ user }: AppState) => user.user.allowedMessagingTypes)
    const allowedMessagingActions = useSelector(({ user }: AppState) => user.user.allowedMessagingActions)
    const userId = useSelector(({ user }: AppState) => user.user._id)
    const userMessaging = useSelector(({ user }: AppState) => user.user.messaging);
    const { t } = useTranslation()

    async function fetchMessagingTypeById(userId: string, messagingId: string): Promise<[boolean, string] | [boolean, string, any[] | any]> {
        const { data: { error, message, additional } }: any = {} = await getMessagingType(userId, messagingId)
        if (error) return [error, message]
        return [error, message, additional]
    };

    function initialMessaging(userId: string, userMessaging: any): void {
        if (!userMessaging?.items.length) return
        userMessaging.items.forEach((item: any) => {
            fetchMessagingTypeById(userId, item._id)
        })

    }

    const sendSMS = useCallback(() => {
        postSendTwilioSMS(userId, "60aa6c0fd2d87e7d2bfcc4d3")
    }, [])

    useEffect(() => {
        initialMessaging(userId, userMessaging)
    }, [])
    return (
        <Row>
            <Col span={24}><ButtonPrimary onClick={sendSMS}>SMS</ButtonPrimary></Col>
            <Col span={24}>
                <Space><p>{'MESSAGING: '}</p><p>{JSON.stringify(userMessaging.items)}</p></Space>
            </Col>
            <Col span={24}>
                <Space><p>{'MESSAGING_ALLOWED_TYPES: '}</p><p>{JSON.stringify(allowedMessagingTypes)}</p></Space>
            </Col>
            <Col span={24}>
                <Space><p>{'MESSAGING_ALLOWED_ACTIONS: '}</p><p>{JSON.stringify(allowedMessagingActions)}</p></Space>
            </Col>
            <Col span={24}>Hardcoded: 'postSendTwilioSMS(userId, "60aa6c0fd2d87e7d2bfcc4d3")'</Col>
            <Col span={24}>TRANSLATION_EXAMPLE: <b>{t('Home')}</b></Col>
        </Row>
    )
}

export default DashboardScreen;
