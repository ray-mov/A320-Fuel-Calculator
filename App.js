
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Home from './screens/Home';
import Result from './screens/Result';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer >
       <Stack.Navigator initialRouteName="Home">      
        <Stack.Screen  options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen  options={{ headerShown: true }} name="Result" component={Result} />
       </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;