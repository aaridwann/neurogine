import React, { Suspense, useEffect, useState } from 'react';

import { ActivityIndicator, Image, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

import BootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { NetworkProvider, setAuthTokenGetter } from '@Neurogine/core-network';

import RootContainerStyles from './Root.container.styles';
import styles from './Root.container.styles';
import logo from '../../Assets/logo.png';
import SnackbarComponent from '../../Components/Snackbar';
import NavigationStack from '../../Navigation/NavigationScreens';
import { store, persistor } from '../../Redux/CrateStore';

/**
 * Loading Fallback
 * @returns {React.ReactNode}
 */
const LoadingFallback = (): React.ReactNode => (
  <View style={RootContainerStyles.LoadingFallback}>
    <ActivityIndicator size="large" />
  </View>
);

// ** Todo need to setup properly with Redux / Storage **
setAuthTokenGetter(async () => {
  return 'MY_SECRET_JWT_TOKEN';
});

const useSplash = (isReady: boolean, setIsReady: (params: boolean) => void) => {
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
};

/**
 * Root Container
 * @returns {React.ReactNode}
 */
const RootContainer = (): React.ReactNode => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isReady, setIsReady] = useState(false);

  useSplash(isReady, setIsReady);

  if (!isReady) {
    return (
      <View style={styles.splashContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain"/>
      </View>);
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Provider store={store}>
        <NetworkProvider>
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaProvider>
              <GestureHandlerRootView style={styles.gestureWrapper}>
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
};

export default RootContainer;