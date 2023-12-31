export { initAuthData } from './model/services/initAuthData';

export { saveJsonSettings } from './model/services/saveJsonSettings';

export {
    getJsonSettings,
    getJsonSettingsByKey,
    useJsonSettings,
    useJsonSettingsByKey,
} from './model/selectors/jsonSelector';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export { getUserInited } from './model/selectors/getUserAuthData/getUserInited';

export { userReducer, userActions } from './model/slice/userSlice';
export type { UserSchema, User } from './model/types/user';

export {
    getUserRoles,
    isUserAdmin,
    isUserManager,
} from './model/selectors/roleSelector';
