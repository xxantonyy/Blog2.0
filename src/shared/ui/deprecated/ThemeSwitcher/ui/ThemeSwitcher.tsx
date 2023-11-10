import React, { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
// eslint-disable-next-line ttx/layer-imports
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/future';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon as IconRedesigned } from '@/shared/ui/redesigned/Icon';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import ThemeIconRedesigned from '@/shared/assets/icons/theme.svg';

interface ThemeSwitcherProps {
    className?: string;
}

/**
 * Устарел, используем новые компаненты
 * * @deprecated
 */

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <ToggleFeatures
            feature="isAppRedisigned"
            on={(
                <IconRedesigned
                    Svg={ThemeIconRedesigned}
                    clickable
                    onClick={onToggleHandler}
                />
            )} off={(
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={classNames('', {}, [className])}
                    onClick={onToggleHandler}
                >
                    <Icon
                        Svg={ThemeIcon} width={40} height={40}
                    />
                </Button>
            )}
        />
    );
});
