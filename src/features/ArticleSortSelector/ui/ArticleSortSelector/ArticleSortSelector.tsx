import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSordField } from '@/entities/Article';
import { SelectOptions, Select } from '@/shared/ui/deprecated/Select';
import { ToggleFeatures } from '@/shared/lib/future';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ListBoxItem } from '@/shared/ui/redesigned/Popups/components/ListBox/ListBox';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSordField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSordField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, onChangeOrder, onChangeSort, order, sort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOptions<ArticleSordField>[]>(
        () => [
            {
                value: ArticleSordField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSordField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSordField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t],
    );

    return (
        <ToggleFeatures
            feature="isAppRedisigned"
            on={(
                <div className={classNames(cls.ArticleSortSelectorRedesigned, {}, [className])}>
                    <VStack gap="8">
                        <Text title={t('sort by')} />
                        <ListBox
                            items={sortFieldOptions as ListBoxItem<ArticleSordField>[]}
                            value={sort}
                            onChange={onChangeSort}
                        />
                        <ListBox
                            items={orderOptions as ListBoxItem<SortOrder>[]}
                            value={order}
                            onChange={onChangeOrder}
                        />
                    </VStack>
                </div>
            )}
            off={(
                <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
                    <Select<ArticleSordField>
                        options={sortFieldOptions}
                        label={t('Сортировать ПО')}
                        value={sort}
                        onChange={onChangeSort}
                    />
                    <Select
                        options={orderOptions}
                        label={t('по')}
                        value={order}
                        onChange={onChangeOrder}
                        className={cls.order}
                    />
                </div>
            )}
        />
    );
});
