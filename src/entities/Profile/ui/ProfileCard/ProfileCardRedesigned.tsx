import { useTranslation } from 'react-i18next';
import { CountrySelect } from '@/entities/Country';
import { CurrenctSelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { ProfileCardProps } from './ProfileCard';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation();

    return (
        <HStack justify="center" max>
            <Text
                variant="error"
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align="center"
            />
        </HStack>
    );
};

export const ProfileCardRedesignedSkeleton = () => (
    <Card padding="24" max border="normal_round">
        <VStack gap="32">
            <HStack max justify="center">
                <Skeleton border="100%" width={128} height={128} />
            </HStack>
            <HStack gap="32" max>
                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                </VStack>

                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                </VStack>
            </HStack>
        </VStack>
    </Card>
);

export const ProfileCardRedesigned = ({
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

    return (
        <Card
            padding="24"
            border="partial"
            max
            className={classNames(cls.ProfileCardRedesigned, {}, [className])}
        >
            <VStack align="center" className={cls.avatarSWrapper}>
                {data?.avatar && (
                    <div
                        className={classNames(cls.avatarWrapper, {}, [
                            className,
                        ])}
                    >
                        <Avatar src={data?.avatar} size={128} alt={data?.avatar} />
                    </div>
                )}
            </VStack>
            <HStack gap="24" max>
                <VStack gap="16" max>
                    <Input
                        width={100}
                        label={t('Имя')}
                        value={data?.first}
                        placeholder={t('Ваше имя')}
                        className={cls.input}
                        onChange={onChangeFirstName}
                        readonly={readonly}
                        data-testid="ProfileCard.firstname"
                    />
                    <Input
                        width={100}
                        label={t('Фамилия')}
                        value={data?.lastname}
                        placeholder={t('Ваша фамилия')}
                        className={cls.input}
                        onChange={onChangeLastName}
                        readonly={readonly}
                        data-testid="ProfileCard.lastname"
                    />
                    <Input
                        width={100}
                        label={t('Возраст')}
                        value={data?.age}
                        placeholder={t('Возраст')}
                        className={cls.input}
                        onChange={onChangeAgeName}
                        readonly={readonly}
                    />
                    <Input
                        width={100}
                        label={t('Город')}
                        value={data?.city}
                        placeholder={t('Город')}
                        className={cls.input}
                        onChange={onChangeCityName}
                        readonly={readonly}
                    />
                </VStack>
                <VStack gap="16" max>
                    <Input
                        width={100}
                        label={t('Ник')}
                        value={data?.username}
                        placeholder={t('Введите имя пользователя')}
                        className={cls.input}
                        onChange={onChangeUserName}
                        readonly={readonly}
                    />
                    <Input
                        width={100}
                        label={t('Аватар')}
                        value={data?.avatar}
                        placeholder={t('Введите ссылку на аватар')}
                        className={cls.input}
                        onChange={onChangeAvatar}
                        readonly={readonly}
                    />

                    <CurrenctSelect
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                        className={cls.input}
                    />
                    <CountrySelect
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                        className={cls.input}
                    />
                </VStack>
            </HStack>
        </Card>
    );
};
