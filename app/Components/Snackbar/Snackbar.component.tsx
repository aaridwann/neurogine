import React, { useEffect } from 'react';

import Toast from 'react-native-toast-message';
import { useSelector, useDispatch } from 'react-redux';

import { snackbarActions } from '@Neurogine/root';

import { toastConfig } from './Snackbar.component.config';

import type { RootState } from '../../Redux/Reducers';

/**
 * Snackbar Component
 * @description Snackbar Component is a global snackbar component that can be used to display snackbars.
 * @returns {React.FC} - Snackbar Component
 */
const SnackbarComponent: React.FC = () => {
  const dispatch = useDispatch();

  const { visible, type, title, message, duration, position } = useSelector(
    (state: RootState) => state.snackbar,
  );

  useEffect(() => {
    if (visible) {
      Toast.show({
        type, text1: title, text2: message, visibilityTime: duration, position,
        onHide: () => {
          dispatch(snackbarActions.hideSnackbar());
        },
      });
    }
  }, [visible, type, title, message, duration, position, dispatch]);

  return <Toast config={toastConfig} />;
};

export default SnackbarComponent;