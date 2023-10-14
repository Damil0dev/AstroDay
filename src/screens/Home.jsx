import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableHighlight, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { ImgCard } from "../components/ImgCard";
import { getAstronomyPictureOfDay } from '../api/api.js';

export function Home() {
    const [data, setData] = useState([]);
    const [randomData, setRandomData] = useState([]);
    const navigation = useNavigation();

    const getRandomDate = () => {
        const start = new Date("1995-01-01");
        const end = new Date();
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return date.toISOString().split('T')[0];
    }

    useEffect(() => {
        const todayDate = new Date().toISOString().split('T')[0];
        const generatedRandomDate = getRandomDate();

        const fetchData = async () => {
            try {
                const result = await getAstronomyPictureOfDay(todayDate);
                setData(result);
                console.log(result);
            } catch (error) {
                console.error(error.message);
            }
        };

        const fetchData2 = async () => {
            try {
                const result = await getAstronomyPictureOfDay(generatedRandomDate);
                setRandomData(result);
                console.log(result);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
        fetchData2()
    }, []);

    return (
        <ScrollView className="h-full bg-blue-800">
            <TouchableOpacity className="p-5" onPress={() => { navigation.navigate("Details", {
                title: data.title,
                img: data.url,
                date: data.date,
                explanation: data.explanation
            }) }}>
                <Text className="p-2 text-xl text-white">Today's Image</Text>
                <ImgCard title={data.title} img={data.url} date={data.date} />
            </TouchableOpacity>
            <TouchableOpacity className="p-5" onPress={() => {
                navigation.navigate("Details", {
                    title: randomData.title,
                    img: randomData.url,
                    date: randomData.date,
                    explanation: randomData.explanation
                })
            }}>
                <Text className="p-2 text-xl text-white">Random Image</Text>
                <ImgCard title={randomData.title} img={randomData.url} date={randomData.date} />
            </TouchableOpacity>
            <TouchableOpacity className="p-5">
                <Text className="p-2 text-xl text-white">Most Liked Image This Week</Text>
                <ImgCard title={"Title"} />
            </TouchableOpacity>
        </ScrollView>
    )
}