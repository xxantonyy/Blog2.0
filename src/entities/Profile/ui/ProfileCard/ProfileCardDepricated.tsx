import { useTranslation } from 'react-i18next';
import { CountrySelect } from '@/entities/Country';
import { CurrenctSelect } from '@/entities/Currency';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import cls from './ProfileCard.module.scss';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Input } from '@/shared/ui/deprecated/Input';
import { ProfileCardProps } from './ProfileCard';

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.ProfileCard, {}, [
                cls.error,
            ])}
        >
            <Text
                theme={TextTheme.ERROR}
                title={t('erorr message')}
                text={t('error message')}
                align={TextAlign.CENTER}
            />
        </div>
    );
};

export const ProfileCardDeprecatedLoader = () => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(
                cls.ProfileCard,
                { [cls.loading]: true },
                [],
            )}
        >
            <Loader />
        </div>
    );
};

export const ProfileCardDepricated = ({
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

    const mod: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mod, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div
                        className={classNames(cls.avatarWrapper, {}, [
                            className,
                        ])}
                    >
                        <Avatar src={data?.avatar} size={150} alt="" />
                    </div>
                )}

                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                    data-testid="ProfileCard.firstname"
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                    data-testid="ProfileCard.lastname"
                />
                <Input
                    value={data?.age}
                    placeholder={t('Возраст')}
                    className={cls.input}
                    onChange={onChangeAgeName}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    onChange={onChangeCityName}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    className={cls.input}
                    onChange={onChangeUserName}
                    readonly={readonly}
                />
                <Input
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
            </div>
        </div>
    );
};
