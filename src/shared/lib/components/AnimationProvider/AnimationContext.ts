import { createContext } from 'react';

export type SpringType = typeof import('@react-spring/web');
export type GestureType = typeof import('@use-gesture/react');

export interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

export const AnimationContext = createContext<AnimationContextPayload>({});
