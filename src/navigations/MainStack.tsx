import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab, { BottomTabParams } from './BottomTab';

export type MainStackParams = {
  BottomTab: NavigatorScreenParams<BottomTabParams>;
}

const Stack = createNativeStackNavigator<MainStackParams>();

export default () => {
  return (
    <Stack.Navigator initialRouteName={'BottomTab'} /* screenOptions={{headerShown: false}} */>
      <Stack.Group>
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
        {/* <Stack.Screen name="" component={} options={{headerShown: false}}/> */}
      </Stack.Group>
    </Stack.Navigator>
  );
};
