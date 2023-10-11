import { Text, View, Image, TouchableHighlight, TouchableOpacity } from "react-native";

import { ImgCard } from "../components/ImgCard";

export function Home() {
    return(
        <View className="h-full bg-blue-800">
            <TouchableOpacity className="p-5">
                <Text className="p-2 text-xl text-white">Today's Image</Text>
                <ImgCard title={"Title"} />
            </TouchableOpacity>

            <TouchableOpacity className="p-5">
                <Text className="p-2 text-xl text-white">Most Liked Image This Week</Text>
                <ImgCard title={"Title"} />
            </TouchableOpacity>
        </View>
    )
}