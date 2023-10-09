import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { MyDropdown } from 'shared/ui/Popups';
import cls from './DropDownButton.module.scss';

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
                        href: RoutePath.profile + authData.id,
                    },
                    ...(isAdminPanelAvable ? [{
                        content: t('Admin'),
                        href: RoutePath.admin_panel,
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
