import { FeatureFlags } from '@/shared/types/futureFlags';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeatures<T> {
   name: keyof FeatureFlags;
   on: () => T;
   off: () => T;
}

export function toggleFeatures<T>({ name, on, off }: ToggleFeatures<T>): T {
    if (getFeatureFlag(name)) {
        return on();
    }

    return off();
}
