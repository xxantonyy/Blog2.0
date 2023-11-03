/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './AppLogo.module.scss';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../deprecated/Stack';

interface AppLogoProps {
   className?: string;
   size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const {
        className,
        size = 50,

    } = props;
    const { t } = useTranslation();

    /**
 * Устарел, используем новые компаненты
 * * @deprecated
 */

    return (
        <HStack
            className={classNames(cls.appLogoWrapper, {}, [className])}
            max
            justify="center"
        >
            <AppSvg
                width={size} height={size} color="black"
                className={cls.appLogo}
            />
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
        </HStack>
    );
});
