import { Image, View, TouchableOpacity, Text } from "react-native";

export function Collection() {
    return(
        <>
            <Text className="text-xl text-white p-2 ">Collection #</Text>
            <TouchableOpacity className="h-28 w-full bg-black opacity-50 rounded-md shadow">
                <PrevisualizationImg />
            </TouchableOpacity>
        </>

    )
}

function PrevisualizationImg() {
    return(
        <View className="h-full w-28 bg-black opacity-50 rounded-xl shadow">
            <Image  />
        </View>
    )
}