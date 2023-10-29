import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';

export const Articleagereeting = memo(() => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlePageWasOpened } = useJsonSettings();

    useEffect(() => {
        if (!isArticlePageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
        }
    }, [dispatch, isArticlePageWasOpened]);

    const onClose = () => [
        setIsOpen(false),
    ];

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <Text
                title={t('greetings')}
                text={t('greetings text')}
            />
        </Modal>
    );
});
