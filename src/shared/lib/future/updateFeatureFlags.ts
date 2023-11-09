import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/futureFlags';
import { updateFeatureFlagsMutation } from './services/featureFlagsApi';
import { getAllFeatureFlags, setFeatureFlags } from './setGetFeatures';

interface UpdateFeatureFlagOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlag = createAsyncThunk<
    void,
    UpdateFeatureFlagOptions,
    ThunkConfig<string>
>('user/saveJsonSettings', async ({ userId, newFeatures }, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const allFutures = {
        ...getAllFeatureFlags(),
        ...newFeatures,
    };

    try {
        await dispatch(
            updateFeatureFlagsMutation({
                userId,
                features: allFutures,
            }),
        );

        setFeatureFlags(allFutures);

        return undefined;
    } catch (e) {
        console.log(e);
        return rejectWithValue('');
    }
});
