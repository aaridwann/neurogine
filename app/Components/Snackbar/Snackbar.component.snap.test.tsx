import Toast from 'react-native-toast-message';
import * as reactRedux from 'react-redux';

import { snackbarActions } from '@Neurogine/root';

import SnackbarComponent from './Snackbar.component';
import { runSnapshotTests } from '../../Utils/Test/Test.utils';

jest
  .mock('react-redux', () => ({
    useSelector: jest.fn().mockReturnValue({ visible: true, type: 'info', title: 'hello', message: 'hello', duration: 200, position: 'top' }),
    useDispatch: jest.fn().mockReturnValue(jest.fn()),
  }))
  .mock('@Neurogine/root', () => ({
    snackbarActions: {
      hideSnackbar: jest.fn(),
    },
  }))
  .mock('react-native-toast-message', () => {
    const React = require('react');
    const { View } = require('react-native');

    const Toast = (props: any) => {
      return React.createElement(View, props, props.children);
    };

    Toast.show = jest.fn((options) => {
      if (options && options.onHide) options.onHide();
    });
    Toast.hide = jest.fn();

    return {
      __esModule: true,
      default: Toast,
    };
  });

const { hideSnackbar } = snackbarActions;

describe('Snackbar Component', () => {
  const mockDispatch = jest.fn();

  const configs = [
    {
      desc: 'renders correctly when visible is false',
      props: {},
      beforeTest: () => {
        jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);
        jest.spyOn(reactRedux, 'useSelector').mockImplementation((selector) =>
          selector({
            snackbar: {
              visible: false,
              type: 'success',
              title: 'Success',
              message: 'Operation successful',
              duration: 3000,
              position: 'top',
            },
          }),
        );
      },
      afterTest: () => {
        expect(Toast.show).not.toHaveBeenCalled();
      },
    },
    {
      desc: 'renders and calls Toast.show when visible is true',
      props: {},
      beforeTest: () => {
        jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);
        jest.spyOn(reactRedux, 'useSelector').mockImplementation((selector) =>
          selector({
            snackbar: {
              visible: true,
              type: 'error',
              title: 'Error Title',
              message: 'Error Message',
              duration: 4000,
              position: 'bottom',
            },
          }),
        );
      },
      afterTest: () => {
        expect(Toast.show).toHaveBeenCalledWith(
          expect.objectContaining({
            type: 'error',
            text1: 'Error Title',
            text2: 'Error Message',
            visibilityTime: 4000,
            position: 'bottom',
          }),
        );
      },
    },
    {
      desc: 'triggers hideSnackbar action when Toast onHide callback is executed',
      props: {},
      beforeTest: () => {
        jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);
        jest.spyOn(reactRedux, 'useSelector').mockImplementation((selector) =>
          selector({
            snackbar: {
              visible: true,
              type: 'info',
              title: 'Info',
              message: 'Info Message',
              duration: 2000,
              position: 'top',
            },
          }),
        );

        (Toast.show as jest.Mock).mockImplementationOnce(({ onHide }) => {
          if (onHide) {
            onHide();
          }
        });
      },
      afterTest: () => {
        expect(mockDispatch).toHaveBeenCalledWith(hideSnackbar());
      },
    },
  ];

  runSnapshotTests(SnackbarComponent, configs);
});