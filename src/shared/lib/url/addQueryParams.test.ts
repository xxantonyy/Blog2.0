import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
    test('with one parm', () => {
        const param = getQueryParams({
            test: 'value',
        });
        expect(param).toEqual('?test=value');
    });
    test('with two params', () => {
        const param = getQueryParams({
            test: 'value',
            test2: 'value2',
        });
        expect(param).toEqual('?test=value&test2=value2');
    });
    test('test with undef param', () => {
        const param = getQueryParams({
            test: undefined,
        });
        expect(param).toEqual('?');
    });
});
