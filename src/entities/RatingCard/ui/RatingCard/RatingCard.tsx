import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { $api } from '@/shared/api/api';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
   className?: string;
   title?: string;
   feedBackTitle?: string;
   hasFreedback?: boolean;
   onCancel?: (starsCount: number) => void;
   onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        feedBackTitle,
        hasFreedback,
        onCancel,
        onAccept,
        title,
    } = props;
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const closeHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const onSelectStars = useCallback((stars: number) => {
        setStarsCount(stars);
        if (hasFreedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(stars);
        }
        setIsModalOpen(true);
    }, [hasFreedback, onAccept]);

    const modalContent = (
        <VStack gap="gap32">
            <Text title={feedBackTitle} />
            <Input placeholder={t('your feedback')} value={feedback} onChange={setFeedback} />
            <HStack gap="gap8" justify="end" max>
                <Button onClick={closeHandler} theme={ButtonTheme.OUTLINE_RED}>
                    {t('Close')}
                </Button>
                <Button onClick={acceptHandler}>
                    {t('Send')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align="center" gap="gap8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy onClose={closeHandler}>
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={closeHandler}>
                    {modalContent}
                </Drawer>
            </MobileView>

        </Card>
    );
});
