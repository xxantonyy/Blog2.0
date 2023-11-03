import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/deprecated/Card';
import { Text } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { StarRating } from '@/shared/ui/deprecated/StarRating';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedBackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        feedBackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        title,
        rate = 0,
    } = props;
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const closeHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const onSelectStars = useCallback(
        (stars: number) => {
            setStarsCount(stars);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(stars);
            }
            setIsModalOpen(true);
        },
        [hasFeedback, onAccept],
    );

    const modalContent = (
        <VStack gap="8">
            <Text title={feedBackTitle} />
            <Input
                data-testid="RatingCard.Input"
                placeholder={t('your feedback')}
                value={feedback}
                onChange={setFeedback}
            />
            <HStack gap="8" justify="end" max>
                <Button onClick={closeHandler} variant="clear">
                    {t('Close')}
                </Button>
                <Button data-testid="RatingCard.Send" onClick={acceptHandler}>
                    {t('Send')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card
            data-testid="RatingCard"
            max
            className={classNames(cls.RatingCard, {}, [className])}
        >
            <VStack align="center" gap="8">
                <Text title={starsCount ? t('thank you for rating') : title} />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
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
