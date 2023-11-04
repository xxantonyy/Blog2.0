import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { AppLink as AppLinkDepricated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sedebar';
import cls from './SidebarItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/future';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedisigned"
            off={(
                <AppLinkDepricated
                    theme={AppLinkTheme.PRIMARY}
                    to={item.path}
                    className={classNames(cls.item, { [cls.collapsed]: collapsed })}
                >
                    <item.Icon className={cls.icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLinkDepricated>
            )}
            on={(
                <AppLink
                    activeClassName={cls.active}
                    variant="primary"
                    to={item.path}
                    className={classNames(cls.itemRedesigned, { [cls.collapsedRedesigned]: collapsed })}
                >
                    <Icon Svg={item.Icon} className={cls.icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLink>
            )}
        />

    );
});
