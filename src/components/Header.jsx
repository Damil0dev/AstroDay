import { Text, View, Image } from "react-native";

import menuIcon from "../../assets/menu.png"
import userDefaultIcon from "../../assets/profile-user.png"

export function Header() {
    return (
        <View className="flex flex-row justify-between items-center p-4 bg-blue-900">
            <Image source={menuIcon} className="translate-y-1"></Image>
            <Text className="text-2xl italic font-medium border-b-4 border-fuchsia-600 text-white">AstroDay</Text>
            <Image source={userDefaultIcon}></Image>
        </View>
    )
}