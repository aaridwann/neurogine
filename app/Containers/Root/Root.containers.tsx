import { Suspense } from 'react';
import { ActivityIndicator, StatusBar, useColorScheme, View } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import NavigationStack from '../../Navigation/NavigationScreens';
import { store, persistor } from '../../Redux/CrateStore';

import RootContainerStyles from './Root.container.styles';

/**
 * Loading Fallback
 * @returns {React.ReactNode}
 */
const LoadingFallback = (): React.ReactNode => (
    <View style={RootContainerStyles.LoadingFallback}>
        <ActivityIndicator size='large' />
    </View>
);

/**
 * Root Container
 * @returns {React.ReactNode}
 */
const RootContainer = (): React.ReactNode => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Suspense fallback={<LoadingFallback />}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <SafeAreaProvider>
                        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                        <View style={RootContainerStyles.Container}>
                            <NavigationStack />
                        </View>
                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
        </Suspense>
    );
}

export default RootContainer;
