import { Suspense, useEffect, useState } from 'react';
import { ActivityIndicator, Image, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NetworkProvider, setAuthTokenGetter } from '@Neurogine/core-network';

import NavigationStack from '../../Navigation/NavigationScreens';
import { store, persistor } from '../../Redux/CrateStore';
import RootContainerStyles from './Root.container.styles';
import SnackbarComponent from '../../Components/Snackbar';

import BootSplash from "react-native-bootsplash";

/**
 * Loading Fallback
 * @returns {React.ReactNode}
 */
const LoadingFallback = (): React.ReactNode => (
    <View style={RootContainerStyles.LoadingFallback}>
        <ActivityIndicator size='large' />
    </View>
);

// ** Todo need to setup properly with Redux / Storage ** 
setAuthTokenGetter(async () => {
    return 'MY_SECRET_JWT_TOKEN';
});

/**
 * Root Container
 * @returns {React.ReactNode}
 */
const RootContainer = (): React.ReactNode => {
    const isDarkMode = useColorScheme() === 'dark';
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        const prepareApp = async () => {
            try {

                await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay simulasi/loading
            } catch (error) {
                console.warn(error);
            } finally {
                setIsReady(true);
            }
        };

        prepareApp();
    }, []);

    
    useEffect(() => {
        if (isReady) BootSplash.hide({ fade: true });
    }, [isReady]);

    if (!isReady) {
        return (
        <View style={styles.splashContainer}>
            <Image source={require('../../Assets/logo.png')} style={styles.logo} resizeMode="contain"/>
        </View>)
    }

    return (
        <Suspense fallback={<LoadingFallback />}>
            <Provider store={store}>
                <NetworkProvider>
                    <PersistGate loading={null} persistor={persistor}>
                        <SafeAreaProvider>
                            <GestureHandlerRootView style={{ flex: 1 }}>
                            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                            <View style={RootContainerStyles.Container}>
                                <NavigationStack />
                                <SnackbarComponent />
                            </View>
                            </GestureHandlerRootView>
                        </SafeAreaProvider>
                    </PersistGate>
                </NetworkProvider>
            </Provider>
        </Suspense>
    );
}

export default RootContainer;

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        backgroundColor: '#EBEBEB', // Warna background bootsplash
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
});
