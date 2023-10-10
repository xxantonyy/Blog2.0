import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
   className?: string;
   value?: Country;
   onChange?: (value: Country) => void;
   readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const options = [
        { value: Country.Armenia, content: Country.Armenia },
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Kazakhstan, content: Country.Kazakhstan },
        { value: Country.Russia, content: Country.Russia },
        { value: Country.Ukraine, content: Country.Ukraine },
    ];
    const onChangehandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox items={options} className={className} readonly={readonly} value={value} onChange={onChangehandler} />
    );

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         // eslint-disable-next-line i18next/no-literal-string
    //         label={t('Выберите страну')}
    //         options={options}
    //         value={value}
    //         onChange={onChangehandler}
    //         readonly={readonly}
    //     />
    // );
});
