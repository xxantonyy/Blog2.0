/* eslint-disable i18next/no-literal-string */
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './Navbar.module.scss';
import { ToggleFeatures } from '@/shared/lib/future';
import { Text, TextTheme } from '@/shared/ui/Text';
import { DropDownButton } from '@/features/dropdownButton';
import { NotificationButton } from '@/features/notificationsButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import NotificatoinPng from '@/shared/assets/icons/notification-20-20.svg';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedisigned"
                on={(
                    <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
                        <HStack gap="gap16" className={cls.actions}>
                            <NotificationButton svg={NotificatoinPng} />
                            <DropDownButton />
                        </HStack>
                    </header>
                )}
                off={(
                    <header className={classNames(cls.Navbar, {}, [className])}>
                        <Text
                            theme={TextTheme.INVERTED}
                            className={cls.appName}
                            title={t('Tony App')}
                        />
                        <AppLink
                            theme={AppLinkTheme.SECONDARY}
                            className={cls.linkCreate}
                            to={getRouteArticleCreate()}
                        >
                            {t('Create Article')}
                        </AppLink>
                        <HStack gap="gap16" className={cls.actions}>
                            <NotificationButton svg={NotificatoinPng} />
                            <DropDownButton />
                        </HStack>
                    </header>
                )}
            />

        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
