import { View, Text } from "react-native";

import { Collection } from "../components/Collection";

export function Saved() {
    return (
        <View className="h-full p-5 bg-blue-800">
            <Collection />
            <Collection />
        </View>
    )
}