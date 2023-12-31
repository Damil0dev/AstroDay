import { Image, Text, TouchableOpacity, View } from "react-native";

import likeIcon from "../../assets/heart-nonfill.png"
import saveIcon from "../../assets/save.png"

export function ImgCard({title, img, date}) {
    return(
        <View className="w-full rounded-lg bg-blue-600">
            <View>
                <Image className="w-full h-48 rounded-t-lg" source={{ uri: img }} />
            </View>
            <View className="p-4">
                <Text className="text-white text-xl">{title}</Text>
                <View className="flex flex-row items-center justify-between gap-x-5">
                    <Text className="text-base text-neutral-400 italic">{date}</Text>

                    <View className="flex flex-row items-center gap-x-7">
                        <Image source={likeIcon} className="w-5 h-5" />
                        <Image source={saveIcon} className="w-5 h-5" />
                    </View>
                </View>
            </View>
        </View>
    )
}