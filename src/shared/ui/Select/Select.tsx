import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

interface SelectOptions {
    value?: string;
    content?: string;
}

interface SelectProps {
   className?: string;
   label?: string;
   options?: SelectOptions[];
   value?: string;
   onChange?: (value: string) => void;
   readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const onChangeHendler = (e:ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
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
});
