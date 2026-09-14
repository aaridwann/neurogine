import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';

import { RootState } from '../../Redux/Reducers';
import { hideSnackbar } from '../../Redux/Reducers/Snackbar/Snackbar.reducer';
import { toastConfig } from './Snackbar.component.config';

/**
 * Snackbar Component
 * @description Snackbar Component is a global snackbar component that can be used to display snackbars.
 * @returns {React.FC} - Snackbar Component
 */
const SnackbarComponent: React.FC = () => {
    const dispatch = useDispatch();
    const { visible, type, title, message, duration, position } = useSelector(
        (state: RootState) => state.snackbar
    );

    useEffect(() => {
        if (visible) {
            Toast.show({
                type,
                text1: title,
                text2: message,
                visibilityTime: duration,
                position,
                onHide: () => {
                    dispatch(hideSnackbar());
                },
            });
        }
    }, [visible, type, title, message, duration, position, dispatch]);

    return <Toast config={toastConfig} />;
};

export default React.memo(SnackbarComponent);