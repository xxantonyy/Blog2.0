export enum AppRoutes {
    MAIN = 'main',
    SETTINGS = 'settings',
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
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteSettings = () => '/settings';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteAbout()]: AppRoutes.ABOUT,
    [getRouteProfile(':id')]: AppRoutes.PROFILE,
    [getRouteArticles()]: AppRoutes.ARTICLES,
    [getRouteArticleDetails(':id')]: AppRoutes.ARTICLE_DETAILS,
    [getRouteArticleCreate()]: AppRoutes.ARTICLE_CREATE,
    [getRouteArticleEdit(':id')]: AppRoutes.ARTICLE_EDIT,
    [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN_PAGE,
    [getRouteSettings()]: AppRoutes.SETTINGS,
};

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: getRouteMain(),
    [AppRoutes.SETTINGS]: getRouteSettings(),
    [AppRoutes.ABOUT]: getRouteAbout(),
    [AppRoutes.PROFILE]: getRouteProfile(':id'), // + id:
    [AppRoutes.ARTICLES]: getRouteArticles(),
    [AppRoutes.ARTICLE_DETAILS]: getRouteArticleDetails(':id'), // + id:
    [AppRoutes.ARTICLE_CREATE]: getRouteArticleCreate(),
    [AppRoutes.ARTICLE_EDIT]: getRouteArticleEdit(':id'), // + id:
    [AppRoutes.ADMIN_PANEL]: getRouteAdmin(),
    [AppRoutes.FORBIDDEN_PAGE]: getRouteForbidden(),

    // последний
    [AppRoutes.NOT_FOUND]: '*',
};
