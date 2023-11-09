/* eslint-disable i18next/no-literal-string */
import { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonSize as ButtonSizeDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/deprecated/Stack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { ToggleFeatures } from '@/shared/lib/future';
import { LangSwitcher } from '@/shared/ui/deprecated/LangSwitcher';
import { ThemeSwitcher } from '@/shared/ui/deprecated/ThemeSwitcher';
import { useSidebarItems } from '../../model/selector/getSidebarItems';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSidebarItems();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () => sidebarItemsList.map((item) => (
            <SidebarItem
                item={item}
                collapsed={collapsed}
                key={item.path}
            />
        )),
        [collapsed, sidebarItemsList],
    );

    return (
        <ToggleFeatures
            feature="isAppRedisigned"
            on={(
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
                    <VStack
                        z-index={15}
                        role="navigation"
                        gap="8"
                        className={cls.items}
                    >
                        {itemsList}
                    </VStack>
                    <Icon
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        Svg={ArrowIcon}
                        clicable
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </div>
                </aside>
            )}
            off={(
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.Sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <ButtonDeprecated
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        theme={ButtonTheme.CLEAR}
                        size={ButtonSizeDeprecated.L}
                        square
                    >
                        {collapsed ? '>' : '<'}
                    </ButtonDeprecated>
                    <VStack
                        role="navigation" gap="8"
                        className={cls.items}
                    >
                        {itemsList}
                    </VStack>
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </div>
                </aside>
            )}
        />
    );
});
