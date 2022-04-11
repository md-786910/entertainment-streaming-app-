import 'react-native-gesture-handler'

import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, ActivityIndicator, Linking, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'

// https://api.themoviedb.org/3/search/movie?api_key=5b75d913e1f7cfac811722492eb6b363&query=Jack+Reacher

const poster_image = "https://image.tmdb.org/t/p/w1280"
const postet_image1 = "https://image.tmdb.org/t/p/w1280/4D246dpe7yy2GvHI2IbpeqkUXry.jpg"
const postet_image2 = "https://image.tmdb.org/t/p/w1280/eErd3FqwgeRUcskfxkzFHqQf7F3.jpg"
const postet_image3 = "https://image.tmdb.org/t/p/w1280/5DU39tmUzbXtD6UXgm7iZqxpwoV.jpg"

const api_key = "5b75d913e1f7cfac811722492eb6b363"


const image = [

    {
        postet_image1: "https://image.tmdb.org/t/p/w1280/4D246dpe7yy2GvHI2IbpeqkUXry.jpg"
    },
    {
        postet_image1: "https://image.tmdb.org/t/p/w1280/5DU39tmUzbXtD6UXgm7iZqxpwoV.jpg"
    },
    {
        postet_image1: "https://image.tmdb.org/t/p/w1280/4D246dpe7yy2GvHI2IbpeqkUXry.jpg"

    }, {
        postet_image1: "https://image.tmdb.org/t/p/w1280/5DU39tmUzbXtD6UXgm7iZqxpwoV.jpg"
    },
]



import Trending from "../stackPage/Trending"
/*
backdrop_path: "/fGoDOd8c5E9dLZay1PDNZn4fIcf.jpg"
genre_ids: (2) [27, 35]
id: 720407
original_language: "en"
original_title: "Untitled Horror Movie"
overview: ""
popularity: 6.686
poster_path: "/HizqO0Htv6e68pWu0gzsoDthXq.jpg"
release_date: "2021-06-12"
title: "Untitled Horror Movie"
video: false
vote_average: 4.2
vote_count: 11
*/

const serial = "salman khan"

let tvShow = `
https://api.themoviedb.org/3/search/tv?api_key=5b75d913e1f7cfac811722492eb6b363&query=${serial}&page=1&include_adult=false`

tvShow = `
 https://api.themoviedb.org/3/search/multi?api_key=5b75d913e1f7cfac811722492eb6b363&query=${serial}&language=en-US&page=1&include_adult=false`



const renderItem = (item) => {
    console.log(item)

    return (
        <TouchableOpacity style={{ margin: 5 }}>
            <Image source={{ uri: item }} style={{ width: 200, height: 200, margin: 2, borderRadius: 10 }} resizeMode="cover" />
        </TouchableOpacity>
    )
}


const Home = ({ navigation }) => {

    const [movie, setMovie] = useState([])
    const [news, setnews] = useState([])
    const [catogorie, setcatogorie] = useState([])
    const [live, setlive] = useState([])
    const [trending, setrending] = useState([])
    const [lastest, setlastest] = useState([])

    const fetchMovie = async () => {

        const movieName = "romantic"
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movieName}&page=1&include_adult=true&language=hin-IND`

        try {
            let response = await fetch(url);
            let data = await response.json();
            setMovie(data.results)
        } catch (error) {
            console.log("error");
        }
    }

    const fetchLiveTv = async () => {

        const movieName = "salman khan"
        const url = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${movieName}&language=en-US&page=1`

        try {
            let response = await fetch(url);
            let data = await response.json();

            setlive(data.results[0].known_for)
        } catch (error) {
            console.log("error");
        }
    }

    const fetchTrending = async () => {


        const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`
        try {
            let response = await fetch(url);
            let data = await response.json();

            setrending(data.results)
        } catch (error) {
            console.log("error");
        }
    }

    const fetchLatest = async () => {

        const movieName = "hollywood"
        const url = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${movieName}&page=1&include_adult=true`
        try {
            let response = await fetch(url);
            let data = await response.json();
            // console.log(data)
            setlastest(data.results)
        } catch (error) {
            console.log("error");
        }
    }

    useEffect(() => {
        fetchMovie()
        fetchLiveTv()
        fetchTrending()
        fetchLatest()
    }, [])



    return (
        <View style={{ flex: 1, backgroundColor: "black", }}>

            {/* main item */}

            <View>
                <FlatList data={image} keyExtractor={(item, index) => index} renderItem={({ item }) => renderItem(item.postet_image1)} horizontal={true} />
            </View>

            <ScrollView>
                {/* add  all featires */}
                <View style={{ margin: 5 }}>
                    <Text style={styles.text}>FEATURED</Text>
                </View>
                <ScrollView horizontal={true}>
                    {
                        movie.map((img, index) => {
                            return (
                                <TouchableOpacity style={{ margin: 5 }} key={index} onPress={() => navigation.push("Trending", { img: img })}>
                                    <Image source={{ uri: poster_image + img.poster_path }} style={{ width: 110, height: 150, margin: 2, borderRadius: 10 }} />
                                </TouchableOpacity>
                            )
                        })
                    }

                </ScrollView>

                {/* trending now */}
                <View style={{ margin: 5, flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={styles.text}>TRENDING NOW</Text>
                    <Text style={styles.seeALl}>SEE ALL</Text>
                </View>
                <ScrollView horizontal={true}>
                    {

                        live.map((img, index) => {
                            return (
                                <TouchableOpacity style={{ margin: 5 }} key={index} onPress={() => navigation.push("Tv Show", { img: img })}>
                                    <Image source={{ uri: poster_image + img.poster_path }} style={{ width: 110, height: 150, margin: 2, borderRadius: 10 }} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>

                {/* TV Show */}
                <View style={{ margin: 5, flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={styles.text}>TV SHOW</Text>
                    <Text style={styles.seeALl}>SEE ALL</Text>
                </View>
                <ScrollView horizontal={true}>
                    {

                        trending.map((img, index) => {
                            return (
                                <TouchableOpacity style={{ margin: 5 }} key={index} onPress={() => navigation.push("Live Tv", { img: img })}>
                                    <Image source={{ uri: poster_image + img.poster_path }} style={{ width: 110, height: 150, margin: 2, borderRadius: 10 }} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>

                {/* Live tv  */}
                <View style={{ margin: 5, flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={styles.text}>LIVE TV</Text>
                    <Text style={styles.seeALl}>SEE ALL</Text>
                </View>
                <ScrollView horizontal={true}>
                    {

                        image.map((img) => {

                            return (
                                <TouchableOpacity style={{ margin: 5 }}>
                                    <Image source={{ uri: img.postet_image1 }} style={{ width: 130, height: 150, margin: 2, borderRadius: 10 }} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>

                {/*  tcatogories  */}
                <View style={{ margin: 5, flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={styles.text}>CATOGORIES</Text>
                    <Text style={styles.seeALl}>SEE ALL</Text>
                </View>
                <ScrollView horizontal={true}>
                    {
                        image.map((img) => {
                            return (
                                <TouchableOpacity style={{ margin: 5 }}>
                                    <Image source={{ uri: img.postet_image1 }} style={{ width: 130, height: 150, margin: 2, borderRadius: 10 }} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>

                {/* Movie tv  */}
                <View style={{ margin: 5, flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={styles.text}>MOVIE TV</Text>
                    <Text style={styles.seeALl}>SEE ALL</Text>
                </View>

                <ScrollView horizontal={true}>
                    {
                        lastest.map((img) => {

                            return (
                                <TouchableOpacity style={{ margin: 5 }}

                                    onPress={() => navigation.push("HollyWood", { img: img })}

                                >
                                    <Image source={{ uri: poster_image + img.poster_path }} style={{ width: 130, height: 150, margin: 2, borderRadius: 10 }} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>

                {/* NEWs tv  */}
                <View style={{ margin: 5, flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={styles.text}>NEWS TV</Text>
                    <Text style={styles.seeALl}>SEE ALL</Text>
                </View>

                <ScrollView horizontal={true}>
                    {
                        image.map((img) => {
                            return (
                                <TouchableOpacity style={{ margin: 5 }}>
                                    <Image source={{ uri: img.postet_image1 }} style={{ width: 130, height: 150, margin: 2, borderRadius: 10 }} />
                                </TouchableOpacity>
                            )
                        })
                    }

                </ScrollView>


            </ScrollView >
        </View >


    )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 17,
        marginVertical: 5,
        fontWeight: "bold"
    },
    seeALl: {
        color: "blue",
        fontSize: 17,
        marginVertical: 5,
        fontWeight: "bold"
    }
})



export default Home
