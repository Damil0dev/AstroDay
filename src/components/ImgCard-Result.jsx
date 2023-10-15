import { Image, Text, View } from "react-native";

import likeIcon from "../../assets/heart-nonfill.png"
import saveIcon from "../../assets/save.png"

export function ImgCardResult() {
    return(
        <View className="w-40 h-28 rounded-xl bg-blue-500">
            <Image className="w-full h-full rounded-xl bg-white" />

{/*             <View className="flex-row justify-center gap-x-7">
                <Image source={likeIcon} className="w-6 h-6" />
                <Image source={saveIcon} className="w-6 h-6" />
            </View> */}
        </View>
    )
}