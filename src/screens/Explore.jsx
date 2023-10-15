import { ScrollView, Text, View } from "react-native";

import { Search } from "../components/Search";

export function Explore() {
    return(
        <View className="h-full bg-blue-800">
            <Search />

            <ScrollView>

            </ScrollView>
        </View>
    )
}