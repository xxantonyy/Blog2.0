import { Story } from '@storybook/react';
import { setFeatureFlags } from '@/shared/lib/future';
import { FeatureFlags } from '@/shared/types/futureFlags';

export const FeaturesFlagsDecorator = (features: FeatureFlags) => (StoryComponent: Story) => {
    setFeatureFlags(features);
    return <StoryComponent />;
};
