/* eslint-disable i18next/no-literal-string */
import {
    getUserAuthData,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { NotificationButton } from 'features/notificationsButton';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DropDownButton } from 'features/dropdownButton/ui/DropDownButton';
import NotificatoinPng from '../../../shared/assets/icons/notification-20-20.svg';
import cls from './Navbar.module.scss';

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
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    theme={TextTheme.INVERTED}
                    className={cls.appName}
                    title={t('Tony App')}
                />
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.linkCreate}
                    to={RoutePath.articles_create}
                >
                    {t('Create Article')}
                </AppLink>
                <HStack gap="gap16" className={cls.actions}>
                    <NotificationButton svg={NotificatoinPng} />
                    <DropDownButton />
                </HStack>
            </header>
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
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
