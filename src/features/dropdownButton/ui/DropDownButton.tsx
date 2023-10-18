import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { MyDropdown } from '@/shared/ui/Popups';
import cls from './DropDownButton.module.scss';
import { getRoutePanel, getRouteProfile } from '@/shared/const/router';

interface DropDownButtonProps {
   className?: string;
}

export const DropDownButton = memo((props: DropDownButtonProps) => {
    const {
        className,
    } = props;
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
        return (
            <MyDropdown
                direction="bottom left"
                className={cls.dropdown}
                items={[
                    {
                        content: t('Profile'),
                        href: getRouteProfile(authData.id),
                    },
                    ...(isAdminPanelAvable ? [{
                        content: t('Admin'),
                        href: getRoutePanel(),
                    }] : []),

                    {
                        content: t('Exit'),
                        onClick: onLogout,
                    },
                ]}
                trigger={<Avatar size={30} src={authData.avatar} />}
            />
        );
    }

    return null;
});
