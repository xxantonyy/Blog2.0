import { useTranslation } from 'react-i18next';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '../../../Profile';
import { ToggleFeatures } from '@/shared/lib/future';
import { ProfileCardRedesigned, ProfileCardRedesignedError, ProfileCardRedesignedSkeleton } from './ProfileCardRedesigned';
import { ProfileCardDeprecatedError, ProfileCardDeprecatedLoader, ProfileCardDepricated } from './ProfileCardDepricated';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAgeName?: (value?: string) => void;
    onChangeCityName?: (value?: string) => void;
    onChangeUserName?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAgeName,
    onChangeCityName,
    onChangeAvatar,
    onChangeUserName,
    onChangeCountry,
    onChangeCurrency,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const porps = {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAgeName,
        onChangeCityName,
        onChangeAvatar,
        onChangeUserName,
        onChangeCountry,
        onChangeCurrency,
    };

    if (isLoading) {
        return (
            <ToggleFeatures
                feature="isAppRedisigned"
                on={<ProfileCardRedesignedSkeleton />}
                off={<ProfileCardDeprecatedLoader />}
            />
        );
    }

    if (error) {
        return (
            <ToggleFeatures
                feature="isAppRedisigned"
                on={<ProfileCardRedesignedError />}
                off={<ProfileCardDeprecatedError />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedisigned"
            on={(
                <ProfileCardRedesigned
                    {...porps}
                />
            )}
            off={(
                <ProfileCardDepricated
                    {...porps}
                />
            )}
        />
    );
};
