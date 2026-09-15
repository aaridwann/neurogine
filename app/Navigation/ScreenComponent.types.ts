import type { ComponentType } from 'react';

import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export interface ScreenComponentType {
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: ComponentType<any>;
    options?: NativeStackNavigationOptions;
};