import { FeatureFlags } from '@/shared/types/futureFlags';
import { UserRole } from '@/shared/types/user';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
