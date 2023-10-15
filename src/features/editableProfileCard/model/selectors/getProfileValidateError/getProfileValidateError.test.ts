import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '@/entities/Profile';
import { getProfileValidateError } from './getProfileValidateError';

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
