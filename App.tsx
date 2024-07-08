import React from 'react';
import MainStack from '@navigations/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    },1000);
  },[]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaProvider>
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default App;
