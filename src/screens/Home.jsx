import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableHighlight, TouchableOpacity, ScrollView } from "react-native";

import { ImgCard } from "../components/ImgCard";

import { getAstronomyPictureOfDay } from '../api/api.js';

export function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAstronomyPictureOfDay('2023-01-01'); // O cualquier otra fecha
                setData(result);
                console.log(result);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return(
        <ScrollView className="h-full bg-blue-800">
            <TouchableOpacity className="p-5">
                <Text className="p-2 text-xl text-white">Today's Image</Text>
                <ImgCard title={data.title} img={data.url} date={data.date} />
            </TouchableOpacity>
            <TouchableOpacity className="p-5">
                <Text className="p-2 text-xl text-white">Most Liked Image This Week</Text>
                <ImgCard title={"Title"} />
            </TouchableOpacity>
        </ScrollView>
    )
}