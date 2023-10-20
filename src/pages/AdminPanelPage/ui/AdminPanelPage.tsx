import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
   className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <div data-testid="AdminPanelPage" className={classNames(cls.AdminPanelPage, {}, [className])}>
            {t('adminPanel')}
        </div>
    );
});

export default AdminPanelPage;
