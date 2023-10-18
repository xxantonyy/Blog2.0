export enum AppRoutes {
   MAIN = 'main',
   ABOUT = 'about',
   PROFILE = 'profile',
   ARTICLES = 'articles',
   ARTICLE_DETAILS = 'articles_details',
   ARTICLE_CREATE = 'articles_create',
   ARTICLE_EDIT = 'articles_edit',
   ADMIN_PANEL = 'admin_panel',
   FORBIDDEN_PAGE = 'forbidden_page',

   // last
   NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id?: string) => `/articles/${id}`;
export const getRouteArticlesCreate = () => '/articles/new';
export const getRouteArticlesEdit = (id: string) => `/articles/${id}/edit`;
export const getRoutePanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: getRouteMain(),
    [AppRoutes.ABOUT]: getRouteAbout(),
    [AppRoutes.PROFILE]: getRouteProfile(':id'), // + id:
    [AppRoutes.ARTICLES]: getRouteArticles(),
    [AppRoutes.ARTICLE_DETAILS]: getRouteArticleDetails(':id'), // + id:
    [AppRoutes.ARTICLE_CREATE]: getRouteArticlesCreate(),
    [AppRoutes.ARTICLE_EDIT]: getRouteArticlesEdit(':id'), // + id:
    [AppRoutes.ADMIN_PANEL]: getRoutePanel(),
    [AppRoutes.FORBIDDEN_PAGE]: getRouteForbidden(),

    // последний
    [AppRoutes.NOT_FOUND]: '*',
};
