import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { profileActions, profileReducer } from './profileSlice';
import { updateaProfileData } from '../services/updateaProfileData/updateaProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { ValidateProfileError } from '@/entities/Profile';

const data = {
    username: 'admin',
    age: 22,
    avatar: 'https://kartinki.pibig.info/uploads/posts/2023-04/1682016583_kartinki-pibig-info-p-kartinka-kotik-za-kompyuterom-arti-instagr-1.jpg',
    city: 'Mosocow',
    country: Country.Russia,
    currency: Currency.RUB,
    first: 'Anton',
    lastname: 'Nesterov',
    id: '1',
};

describe('profileSlice.test', () => {
    test('test setReadOnly reducer', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadOnly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancelEdit reducer', () => {
        const state: DeepPartial<ProfileSchema> = { };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true, ValidateError: undefined, form: undefined,
        });
    });

    test('test updateProfile reducer', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: '123' }),
        )).toEqual({ form: { username: '123' } });
    });

    test('test updateProfile servicve pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            ValidateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateaProfileData.pending,
        )).toEqual({ isLoading: true, ValidationError: undefined });
    });

    test('test updateProfile servicve fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateaProfileData.fulfilled(data, '', '1'),
        )).toEqual({
            isLoading: false,
            ValidationError: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
