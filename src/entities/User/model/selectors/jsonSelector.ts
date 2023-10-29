/* eslint-disable max-len */
import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelectors } from '@/shared/lib/store';
import { JsonSettings } from '../types/jsoneSettings';

const defaultJson: JsonSettings = {};

export const [[useJsonSettings, getJsonSettings]] = buildSelectors((state: StateSchema) => state.user?.authData?.jsonSettings || defaultJson);

// eslint-disable-next-line max-len
export const [[useJsonSettingsByKey, getJsonSettingsByKey]] = buildSelectors((state, key: keyof JsonSettings) => state.user?.authData?.jsonSettings?.[key]);
