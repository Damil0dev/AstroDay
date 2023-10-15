import filterIcon from "../../assets/filter.png"
import searchIcon from "../../assets/search.png"

import { Image, Text, TextInput, View } from "react-native";

export function Search() {
    return(
        <View className="w-full h-full bg-blue-800">
            <SearchSection />
        </View>
    )
}

function SearchSection() {
    return(
        <View className="w-full flex flex-row justify-center items-center p-5">
            <Filters />
            <SearchBar />
        </View>
    )
}

function SearchBar() {
    return(
        <View className="w-full flex flex-row justify-center items-center gap-5 ">
            <TextInput value="" className="w-3/4 py-2.5 px-5 rounded-xl bg-blue-700 text-white"/>

            <Image source={searchIcon} className="w-6 h-6" />
        </View>
    )
}

function Filters() {
    return(
        <View>
            <View>
                <Image source={filterIcon} className="w-6 h-6" />
            </View>
        </View>
    )
}