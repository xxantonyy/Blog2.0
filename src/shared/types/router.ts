import { RouteProps } from 'react-router-dom';
import { UserRole } from './user';

export type AppRoutProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
