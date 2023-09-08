import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateError } from './model/selectors/getProfileValidateError/getProfileValidateError';

export {
    Profile,
    ProfileSchema,
} from './model/types/profile';

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';

export {
    fetchProfileData,
} from './model/services/fetchProfileData/fetchProfileData';

export {
    updateaProfileData,
} from './model/services/updateaProfileData/updateaProfileData';

export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';

export {
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateError,
};
