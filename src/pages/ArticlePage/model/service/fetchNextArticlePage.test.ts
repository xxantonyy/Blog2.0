// import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
// import { fetchArticlesList } from './fetchArticlesList';
// import { fetchNextArticlePage } from './fetchNextArticlePage';

// jest.mock('./fetchArticlesList');

// describe('fetchNextArticlesPage.test', () => {
//     test('success', async () => {
//         const thunk = new TestAsyncThunk(fetchNextArticlePage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: true,
//             },
//         });

//         const result = await thunk.callThunk();

//         expect(thunk.dispatch).toBeCalledTimes(4);
//         expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
//     });
//     test('fetchAritcleList not called', async () => {
//         const thunk = new TestAsyncThunk(fetchNextArticlePage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: false,
//             },
//         });

//         await thunk.callThunk();

//         expect(thunk.dispatch).toBeCalledTimes(2);
//         expect(fetchArticlesList).not.toHaveBeenCalled();
//     });
// });
