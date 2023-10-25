/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    return (
        <Page
            data-testid="ProfilePage"
            className={classNames('', {}, [className])}
        >
            <VStack gap="gap16">
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id || ''} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
