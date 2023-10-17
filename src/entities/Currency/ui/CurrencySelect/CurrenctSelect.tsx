import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

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
        <ListBox
            className={className}
            value={value}
            items={options}
            defaultValue={t('Choose currency')}
            onChange={onChangehandler}
            readonly={readonly}
        />

    );

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         // eslint-disable-next-line i18next/no-literal-string
    //         label={t('Укажите валюту')}
    //         options={options}
    //         value={value}
    //         onChange={onChangehandler}
    //         readonly={readonly}
    //     />
    // );
});
