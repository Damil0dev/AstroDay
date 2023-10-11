import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from "./src/components/Header";
import { Nav } from "./src/components/Nav";
import { Home } from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />

      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{
          headerShown: false
        }} />
      </Stack.Navigator>

      <Nav />
    </NavigationContainer>
  );
}
