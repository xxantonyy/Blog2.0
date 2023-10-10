import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchCommentsByArticleId } from './fetchCommentsBuArticleId';

const data = [
    {
        id: '1',
        text: 'some comment',
        articleId: '1',
        userId: '1',
    },
    {
        id: '2',
        text: 'some comment 2',
        articleId: '1',
        userId: '1',
    },
    {
        articleId: '1',
        userId: '1',
        text: 'dfgcgdsg',
        id: '1EuF2Ge',
    },
    {
        articleId: '1',
        userId: '2',
        text: 'ddfgdsf',
        id: 'NEEJsZ6',
    },
    {
        articleId: '1',
        userId: '2',
        text: 'привет',
        id: 'UsMmRTq',
    },
];

describe('loginByUsername.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        console.log(result);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
});
