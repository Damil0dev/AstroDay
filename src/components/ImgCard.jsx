import { Image, Text, TouchableOpacity, View } from "react-native";

import likeIcon from "../../assets/heart-nonfill.png"
import saveIcon from "../../assets/save.png"

export function ImgCard({title}) {
    return(
        <View className="w-full rounded-lg bg-blue-600">
            <View>
                <Image className="w-full h-36" />
            </View>
            <View className="p-4">
                <Text className="text-white text-xl">{title}</Text>
                <View className="flex flex-row items-center justify-between gap-x-5">
                    <Text className="text-base text-neutral-400 italic">dd/mm/yy</Text>

                    <View className="flex flex-row gap-x-7">
                        <Image source={likeIcon} className="w-6 h-6" />
                        <Image source={saveIcon} className="w-6 h-6" />
                    </View>
                </View>
            </View>
        </View>
    )
}