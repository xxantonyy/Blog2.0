import { buildSelector } from '@/shared/lib/store';

export const getCounterValue = buildSelector((state) => state.counter.value);
