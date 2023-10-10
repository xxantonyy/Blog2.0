import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page/Page';

interface ForbiddenPageProps {
   className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <Page className={classNames('', {}, [className])}>
            {t('NotHaveAllow')}
        </Page>
    );
});

export default ForbiddenPage;
