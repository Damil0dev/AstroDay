import { ScrollView, Text, View } from "react-native";

import { Search } from "../components/Search";
import { ImgCardResult } from "../components/ImgCard-Result";

export function Explore() {
    return(
        <View className="h-full bg-blue-800">
            <Search />

            <ScrollView>
                <ResultsSection />
            </ScrollView>
        </View>
    )
}

function ResultsSection() {
    return (
        <View className="w-full flex flex-row justify-evenly flex-wrap gap-y-5">
            <View className="">
                <ImgCardResult />
            </View>

            <View className="">
                <ImgCardResult />
            </View>

            <View className="">
                <ImgCardResult />
            </View>

            <View className="">
                <ImgCardResult />
            </View>

            <View className="">
                <ImgCardResult />
            </View>

            <View className="">
                <ImgCardResult />
            </View>

            <View className="">
                <ImgCardResult />
            </View>

            <View className="">
                <ImgCardResult />
            </View>

            <View className="">
                <ImgCardResult />
            </View>

            <View className="">
                <ImgCardResult />
            </View>
        </View>
    )
}