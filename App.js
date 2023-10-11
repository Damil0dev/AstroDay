import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View className="w-full h-screen bg-blue-800">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
