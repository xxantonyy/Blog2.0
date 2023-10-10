import { Profile, ValidateProfileError } from '@/entities/Profile/model/types/profile';

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    ValidateError?: ValidateProfileError[];
}
