import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from "./src/components/Header";
import { Nav } from "./src/components/Nav";

import { Home } from "./src/screens/Home";
import { Explore } from "./src/screens/Explore";
import { Saved } from "./src/screens/Saved";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />

      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Explore' component={Explore} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Saved' component={Saved} options={{
          headerShown: false
        }} />
      </Stack.Navigator>

      <Nav />
    </NavigationContainer>
  );
}
