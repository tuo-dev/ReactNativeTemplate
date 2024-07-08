import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';

import HomeAct from '@assets/svgs/bottomTab/home-active.svg';
import HomeDefault from '@assets/svgs/bottomTab/home-default.svg';

const navIcon:{ [key in keyof BottomTabParams]: { act: JSX.Element, default: JSX.Element } } = {
  Home: { act: <HomeAct />, default: <HomeDefault /> }
};

export type BottomTabParams = {
  Home: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParams>();

export default () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route: { name } }) => ({
        tabBarStyle: { height: 48 , borderTopColor: 'transparent', shadowColor: 'transparent' },
        tabBarIcon: ({ focused }) => focused ? navIcon[name].act : navIcon[name].default,
        tabBarShowLabel: false,
        headerShown: false
      })}>
      <BottomTab.Screen name="Home" component={Home} />
    </BottomTab.Navigator>
  );
};
