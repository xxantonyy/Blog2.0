import { FeatureFlags } from '@/shared/types/futureFlags';
import { UserRole } from '@/shared/types/user';
import { JsonSettings } from './jsoneSettings';

export interface User {
    id: string;
    username: string;
    jsoneSettings?: JsonSettings;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
