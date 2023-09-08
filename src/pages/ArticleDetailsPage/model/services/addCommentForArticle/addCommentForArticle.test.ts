import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { StateSchema } from 'app/providers/StoreProvider';
import { addCommentForArticle } from './addCommentForArticle';

const user = {
    articleId: '1',
    userId: '1',
    text: '123',
};

describe('addCommentForArticle.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.api.get.mockReturnValue(Promise.resolve({ user }));

        const result = await thunk.callThunk('1');

        console.log(result);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
});
