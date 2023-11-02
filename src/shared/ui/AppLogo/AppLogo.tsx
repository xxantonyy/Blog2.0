import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack/HStack/HStack';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
   className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <HStack
            className={classNames(cls.appLogoWrapper, {}, [className])}
            max
            justify="center"
        >
            <AppSvg className={cls.appLogo} />
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
        </HStack>
    );
});
