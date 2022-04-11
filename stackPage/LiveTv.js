import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native'


const poster_image = "https://image.tmdb.org/t/p/w1280"

const Trending = ({ route }) => {

    const doc = route.params.img;

    console.log(doc);
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>

            <ScrollView>
                <View style={{ flexDirection: "row", margin: 2, justifyContent: "center" }}>
                    <TouchableOpacity >
                        <Image source={{ uri: poster_image + doc.poster_path }} style={{ width: 200, height: 300, borderRadius: 10, }} resizeMode="cover" />
                    </TouchableOpacity>

                    <View style={{ flexDirection: "column", alignItems: "space-between", justifyContent: "center", marginTop: -70, marginLeft: 5 }}>
                        <TouchableOpacity style={{ backgroundColor: "indigo", color: "white", padding: 15, width: 180, borderRadius: 5, fontWeight: "bold" }}>
                            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
                                Play Now
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "indigo", color: "white", padding: 15, marginTop: 100, width: 180, borderRadius: 5 }}>
                            <Text style={{ color: "white", fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
                                Download
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* write about pic */}

                <View>

                    <Text style={styles.content}>
                        Adult: {doc.adult}

                    </Text>
                    <Text style={styles.content}>

                        Language : {doc.original_language}
                    </Text>
                    <Text style={styles.content}>

                        Title : {doc.original_title}
                    </Text>
                    <Text style={styles.content}>

                        Overview : {doc.overview}
                    </Text>
                    <Text style={styles.content}>

                        Release Date : {doc.release_date}
                    </Text>

                    <Text style={styles.content}>

                        Vote : {doc.vote_average}
                    </Text>

                    <Text style={styles.content}>

                        Vote Count: {doc.vote_count}
                    </Text>

                </View>

            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    content: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5
    }
})

export default Trending
