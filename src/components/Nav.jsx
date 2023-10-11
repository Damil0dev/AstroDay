import { Image, TouchableOpacity, View } from "react-native";

import { useNavigation } from '@react-navigation/native';

import homeIcon from "../../assets/home.png"
import exploreIcon from "../../assets/search.png"
import savedIcon from "../../assets/heart.png"

export function Nav() {
    const navigation = useNavigation();

    return(
        <View className="flex flex-row justify-around items-center bg-blue-900">
            <TouchableOpacity className="p-4" onPress={() => {navigation.navigate("Home")}}>
                <Image source={homeIcon} />
            </TouchableOpacity>

            <TouchableOpacity className="p-4" onPress={() => { navigation.navigate("Explore") }}>
                <Image source={exploreIcon} />
            </TouchableOpacity>

            <TouchableOpacity className="p-4" onPress={() => { navigation.navigate("Saved") }}>
                <Image source={savedIcon} />
            </TouchableOpacity>
        </View>
    )
}