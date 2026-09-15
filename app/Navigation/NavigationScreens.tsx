import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CatalogProductScreens } from '@Neurogine/catalog-product';
import { DetailScreens } from '@Neurogine/detail-product';

import type { ScreenComponentType } from './ScreenComponent.types';

const Stack = createNativeStackNavigator<Record<string, object | undefined>>();

/**
 * Screen configuration
 * @returns {React.ReactNode} - List of screen configuration
 */
const groupedScreens: ScreenComponentType[] = [
  ...(CatalogProductScreens as ScreenComponentType[]),
  ...(DetailScreens as ScreenComponentType[]),
];

/**
 * Navigation Stack
 * @returns {React.ReactNode}
 */
const NavigationStack = (): React.ReactNode => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {groupedScreens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name as string}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;