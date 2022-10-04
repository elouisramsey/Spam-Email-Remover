import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from 'src';
import AuthVerify from '@src/pages/unauthenticated/AuthVerify';
import Signup from '@src/pages/unauthenticated/Signup';
import {Routes} from './routes';

export const Stack = createNativeStackNavigator<Routes>();
export const UnAuthenticatedStack = createNativeStackNavigator<Routes>();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Index} />
    </Stack.Navigator>
  );
};
export const UnAuthenticatedStacks = () => {
  return (
    <UnAuthenticatedStack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerShown: false,
      }}>
      <UnAuthenticatedStack.Screen name="Signup" component={Signup} />
      <UnAuthenticatedStack.Screen name="Verify" component={AuthVerify} />
      <Stack.Screen name="Home" component={Index} />
    </UnAuthenticatedStack.Navigator>
  );
};
