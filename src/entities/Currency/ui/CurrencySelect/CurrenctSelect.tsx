import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency';
import { memo, useCallback } from 'react';

interface CurrenctSelectProps {
   className?: string;
   value?: Currency;
   onChange?: (value: Currency) => void;
   readonly?: boolean;
}

export const CurrenctSelect = memo((props: CurrenctSelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const options = [
        { value: Currency.RUB, content: Currency.RUB },
        { value: Currency.EUR, content: Currency.EUR },
        { value: Currency.USD, content: Currency.USD },
    ];
    const onChangehandler = useCallback((value:string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            // eslint-disable-next-line i18next/no-literal-string
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangehandler}
            readonly={readonly}
        />
    );
});
