import { Image, View } from "react-native";

import homeIcon from "../../assets/home.png"
import exploreIcon from "../../assets/search.png"
import savedIcon from "../../assets/heart.png"

export function Nav() {
    return(
        <View className="flex flex-row justify-around items-center p-4 bg-blue-900">
            <Image source={homeIcon} />
            <Image source={exploreIcon} />
            <Image source={savedIcon} />
        </View>
    )
}