
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
    ok: true,
    status: 200,
  })
);

try {
  jest.mock('react-native-reanimated', () => {
    const reanimated = require('react-native-reanimated/mock');
    reanimated.default.call = () => {};
    return reanimated;
  });
} catch (error) {
}

try {
  jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
      ...actualNav,
      useNavigation: () => ({
        navigate: jest.fn(),
        dispatch: jest.fn(),
        goBack: jest.fn(),
        addListener: jest.fn(() => () => {}),
      }),
      useRoute: () => ({
        params: {},
      }),
    };
  });
} catch (error) {
}

const originalError = console.error;
const originalWarn = console.warn;

jest.mock('react-native-bootsplash', () => 'Bootsplash')
jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native').View;
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    FlatList: View,
    gestureHandlerRootHOC: jest.fn((component) => component),
    Directions: {},
  };
});
jest.mock('@Neurogine/core-network', () => ({
  NetworkProvider: ({ children }) => children,
  setAuthTokenGetter: jest.fn(),
}))
jest.mock('@Neurogine/root', () => ({
    snackbarActions: {
      hideSnackbar: jest.fn()
    }
  }))
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    dispatch: jest.fn(),
    goBack: jest.fn(),
    addListener: jest.fn(() => () => {}),
    removeListener: jest.fn(),
    isFocused: jest.fn(() => true),
  }),
  useRoute: () => ({
    params: {},
  }),
  useIsFocused: () => true,
  NavigationContainer: ({ children }) => children,
}));

beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('React.createElement: type is invalid') ||
        args[0].includes('Warning: An update to') ||
        args[0].includes('ReactDOM.render is no longer supported'))
    ) {
      return;
    }
    originalError(...args);
  };

  console.warn = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Animated: `useNativeDriver`')
    ) {
      return;
    }
    originalWarn(...args);
  };
});

afterAll(() => {
  console.error = originalError;
  console.warn = originalWarn;
});

afterEach(() => {
  jest.clearAllMocks();
});