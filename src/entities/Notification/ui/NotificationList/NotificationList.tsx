import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useNotificatoins } from '../../api/notoficationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton as SkeletonDepricated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack as VStackDepricated } from '@/shared/ui/deprecated/Stack';
import { VStack as VStackRedesigned } from '@/shared/ui/redesigned/Stack';
import { toggleFeatures } from '@/shared/lib/future';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotificatoins(null, {
        pollingInterval: 5000,
    });

    const Skeleton = toggleFeatures({
        name: 'isAppRedisigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDepricated,
    });

    const VStack = toggleFeatures({
        name: 'isAppRedisigned',
        on: () => VStackRedesigned,
        off: () => VStackDepricated,
    });

    if (isLoading) {
        return (
            <VStack
                gap="16"
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem key={item.id} data={item} />
            ))}
        </VStack>
    );
});
