import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDepricated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDepricated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Notification } from '../../model/types/notifications';
import cls from './NotificationItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/future';
import { Card } from '@/shared/ui/redesigned/Card';

interface NotificationItemProps {
    className?: string;
    data: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, data } = props;
    const { t } = useTranslation();

    const content = (
        <ToggleFeatures
            feature="isAppRedisigned"
            on={(
                <Card
                    variant="normal"
                    className={classNames(cls.NotificationItem, {}, [className])}
                >
                    <Text title={data.title} text={data.description} />
                </Card>
            )} off={(
                <CardDepricated
                    theme={CardTheme.OUTLINED}
                    className={classNames(cls.NotificationItem, {}, [className])}
                >
                    <TextDepricated title={data.title} text={data.description} />
                </CardDepricated>
            )}
        />

    );

    if (data.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={data.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
});
