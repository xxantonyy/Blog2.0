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

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + id:
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + id:
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN_PAGE]: '/forbidden',

    // последний
    [AppRoutes.NOT_FOUND]: '*',
};
