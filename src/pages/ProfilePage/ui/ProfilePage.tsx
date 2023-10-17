/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="gap16">
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id || ''} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
