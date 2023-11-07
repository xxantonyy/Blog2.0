import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar as AvatarDepricated } from '@/shared/ui/deprecated/Avatar';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import cls from './DropDownButton.module.scss';
import { getRouteAdmin, getRouteProfile, getRouteSettings } from '@/shared/const/router';
import { Dropdown as DropdownDepricated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/future';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

interface DropDownButtonProps {
    className?: string;
}

export const DropDownButton = memo((props: DropDownButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        const items = [
            {
                content: t('Profile'),
                href: getRouteProfile(authData.id),
            },
            ...(isAdminPanelAvable
                ? [
                    {
                        content: t('Admin'),
                        href: getRouteAdmin(),
                    },
                ]
                : []),

            {
                content: t('Settings'),
                href: getRouteSettings(),
            },
            {
                content: t('Exit'),
                onClick: onLogout,
            },
        ];

        return (
            <ToggleFeatures
                feature="isAppRedisigned"
                on={(
                    <Dropdown
                        direction="bottom left"
                        className={cls.dropdown}
                        items={items}
                        trigger={<Avatar size={40} src={authData.avatar} />}
                    />
                )}
                off={(
                    <DropdownDepricated
                        direction="bottom left"
                        className={cls.dropdown}
                        items={items}
                        trigger={<AvatarDepricated size={30} src={authData.avatar} />}
                    />
                )}
            />
        );
    }

    return null;
});
