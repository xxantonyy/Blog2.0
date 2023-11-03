import { useTranslation } from 'react-i18next';
import { ChangeEvent, useMemo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
    value?: T;
    content?: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOptions<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

/**
 * Устарел, используем новые компаненты
 * * @deprecated
 */

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className, label, options, value, onChange, readonly,
    } = props;
    const { t } = useTranslation();

    const optionsList = useMemo(
        () => options?.map((opt) => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        )),
        [options],
    );

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const onChangeHendler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHendler}
            >
                {optionsList}
            </select>
        </div>
    );
};
