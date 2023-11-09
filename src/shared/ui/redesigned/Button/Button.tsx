import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'size_m'| 'size_l'| 'size_xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    max?: boolean;
    addoneLeft?: ReactNode;
    addoneRight?: ReactNode;
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'clear',
        square,
        disabled,
        addoneLeft,
        fullWidth,
        addoneRight,
        size = 'size_m',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.withAddon]: Boolean(addoneLeft) || Boolean(addoneRight),
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            <div className={cls.addoneLeft}>{addoneLeft}</div>
            {children}
            <div className={cls.addoneRight}>{addoneRight}</div>
        </button>
    );
});
