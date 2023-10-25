import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>];

export function buildSelectors<T extends any[]>(
    ...selectors: Selector<T[number]>[]
): Result<T[number]>[] {
    return selectors.map((selector) => {
        const useSelectorHook = () => useSelector(selector);
        return [useSelectorHook, selector];
    });
}
