import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRoles } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';
import { UserRole } from '@/shared/types/user';

interface RequireAuthProps {
    children: JSX.Element,
    roles?: UserRole[]
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requredRole) => {
            const hasRole = userRoles?.includes(requredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }
    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden_page} state={{ from: location }} replace />;
    }

    return children;
}
