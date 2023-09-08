import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileValidateError } from './getProfileValidateError';
import { ValidateProfileError } from '../../types/profile';

const ValidateError = [
    ValidateProfileError.INCORRECT_COUNTRY,
    ValidateProfileError.INCORRECT_USER_DATA,
];

describe('getProfileValidateError.test', () => {
    test('should return state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                ValidateError,
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual(ValidateError);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
    });
});
