/* eslint-disable i18next/no-literal-string */
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/future';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { DropDownButton } from '@/features/dropdownButton';
import { NotificationButton } from '@/features/notificationsButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const mainClass = toggleFeatures({
        name: 'isAppRedisigned',
        on: () => cls.NavbarRedesigned,
        off: () => cls.Navbar,
    });

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
                    <header className={classNames(mainClass, {}, [className])}>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <DropDownButton />
                        </HStack>
                    </header>
                )}
                off={(
                    <header className={classNames(mainClass, {}, [className])}>
                        <Text
                            theme={TextTheme.INVERTED}
                            className={cls.appName}
                            title={t('Tony App')}
                        />
                        <AppLink
                            variant="primary"
                            className={cls.linkCreate}
                            to={getRouteArticleCreate()}
                        >
                            {t('Create Article')}
                        </AppLink>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <DropDownButton />
                        </HStack>
                    </header>
                )}
            />

        );
    }

    return (
        <header className={classNames(mainClass, {}, [className])}>
            <ToggleFeatures
                feature="isAppRedisigned"
                on={(
                    <Button
                        variant="clear"
                        className={cls.links}
                        onClick={onShowModal}
                    >
                        {t('Войти')}
                    </Button>
                )}
                off={(
                    <ButtonDeprecated
                        theme={ButtonTheme.CLEAR}
                        className={cls.links}
                        onClick={onShowModal}
                    >
                        {t('Войти')}
                    </ButtonDeprecated>
                )}
            />

            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
