/* eslint-disable global-require */
import { Dispatch } from 'redux';
import { fetchNextArticlePage } from './fetchNextArticlePage';
import { articlePageActions } from '../slice/articlePageSlice';
import { StateSchema } from '@/app/providers/StoreProvider';
// eslint-disable-next-line ttx/layer-imports
import { ThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';

describe('fetchNextArticlePage', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;
    let extraArg: ThunkExtraArg;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('should dispatch setPage and fetchArticlesList when there is more data to load', async () => {
        const initialState = {
            articlePage: {
                page: 1,
                hasMore: true,
                isLoading: false,
            },
        };

        // Имитируем getState и селекторы
        const getStateSpy = jest.spyOn(
            require('../selectors/getArticleSelectors'),
            'getArticlePage',
        );
        getStateSpy.mockReturnValue(initialState.articlePage.page);

        const hasMoreSpy = jest.spyOn(
            require('../selectors/getArticleSelectors'),
            'getArticleHasMore',
        );
        hasMoreSpy.mockReturnValue(initialState.articlePage.hasMore);

        const isLoadingSpy = jest.spyOn(
            require('../selectors/getArticleSelectors'),
            'getArticleIsloading',
        );
        isLoadingSpy.mockReturnValue(initialState.articlePage.isLoading);

        const result = fetchNextArticlePage();
        const response = await result(dispatch, getState, extraArg);

        // Expect that setPage and fetchArticlesList have been dispatched
        expect(dispatch).toHaveBeenCalledWith(articlePageActions.setPage(2));
        expect(dispatch).toHaveBeenCalledTimes(4);
    });
});
