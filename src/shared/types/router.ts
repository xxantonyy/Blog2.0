import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';

export type AppRoutProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
