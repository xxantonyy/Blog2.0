import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOptions } from '@/shared/ui/Select/Select';
import { ArticleSordField } from '@/entities/Article/model/types/article';
import { SortOrder } from '@/shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
   className?: string;
   sort: ArticleSordField;
   order: SortOrder;
   onChangeOrder: (newOrder: SortOrder)=> void;
   onChangeSort: (newSort: ArticleSordField)=> void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        className,
        onChangeOrder,
        onChangeSort,
        order,
        sort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo <SelectOptions<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('increase'),
        },
        {
            value: 'desc',
            content: t('decrease'),
        },
    ], [t]);

    const sortFieldOptions = useMemo <SelectOptions<ArticleSordField>[]>(() => [
        {
            value: ArticleSordField.CREATED,
            content: t('date of creature'),
        },
        {
            value: ArticleSordField.TITLE,
            content: t('title'),
        },
        {
            value: ArticleSordField.VIEWS,
            content: t('views'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Sort by')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('by')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
};
