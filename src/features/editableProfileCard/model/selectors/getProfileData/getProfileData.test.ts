import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

const data = {
    username: 'admin',
    age: 22,
    avatar: 'https://kartinki.pibig.info/uploads/posts/2023-04/1682016583_kartinki-pibig-info-p-kartinka-kotik-za-kompyuterom-arti-instagr-1.jpg',
    city: 'Mosocow',
    country: Country.Russia,
    currency: Currency.RUB,
    first: 'Anton',
    lastname: 'Nesterov',
};

describe('getProfileData.test', () => {
    test('should return state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
