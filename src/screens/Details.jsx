import { ScrollView, Text, View, Image } from "react-native";

import likeIcon from "../../assets/heart-nonfill.png"
import saveIcon from "../../assets/save.png"

export function Details({ route, navigation }) {
    const { title, img, date, explanation } = route.params

    return (
        <ScrollView className="h-full bg-blue-800">
            <View className="m-5 bg-blue-700 rounded-lg">
                <Image className="w-full h-64 rounded-t-lg" source={{ uri: img }} />
                
                <View className="flex flex-col gap-y-3 px-5 py-2">
                    <Text className="text-white text-2xl">{title}</Text>

                    <View className="flex flex-row items-center justify-between gap-x-5">
                        <Text className="text-base text-neutral-400 italic">{date}</Text>

                        <View className="flex flex-row gap-x-7">
                            <Image source={likeIcon} className="w-6 h-6" />
                            <Image source={saveIcon} className="w-6 h-6" />
                        </View>
                    </View>

                    <Text className="text-white text-lg text-justify">{explanation}</Text>
                </View>

            </View>
        </ScrollView>
    )
}