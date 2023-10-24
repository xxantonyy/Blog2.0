import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = 'gap4' | 'gap8' | 'gap16' | 'gap32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    between: cls.justifyBetween,
    end: cls.justifyEnd,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const directionGap: Record<FlexGap, string> = {
    gap4: cls.gap4,
    gap8: cls.gap8,
    gap16: cls.gap16,
    gap32: cls.gap32,
};

export interface flexProps {
   className?: string;
   children?: ReactNode;
   justify?: FlexJustify;
   align?: FlexAlign;
   direction?: FlexDirection;
   gap?: FlexGap;
   max?: boolean
}

export const Flex = (props: flexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap = 'gap4',
        max,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && directionGap[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
};
