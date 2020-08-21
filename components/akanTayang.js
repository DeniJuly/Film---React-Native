import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Star from '../assets/icon/star-10.svg';

export default function AkanTayang({item}){
    return(
        <ImageBackground
                source={{
                    uri: 'https://image.tmdb.org/t/p/w780'+item.backdrop_path
                }}
                style={styles.background}
            >
                <View
                    style={styles.content}
                >
                    <Image 
                        source={{
                            uri: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'+item.poster_path
                        }}
                        style={styles.poster}
                    />
                    <View
                        style={styles.detail}
                    >
                        <Text
                            style={styles.title}
                        >{item.original_title}</Text>
                        <Text
                            style={styles.genre}
                        >Animation, Adventure, Comedy</Text>
                        <View
                            style={styles.rating}
                        >
                            <Star />
                            <Text
                                style={styles.ratingText}
                            >{item.vote_average}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        borderRadius: 5,
        resizeMode: 'cover',
        width: 310,
        height: 160,
        overflow: 'hidden'
    },
    content: {
        backgroundColor: 'rgba(0,0,0,.4)',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 15,
        paddingHorizontal: 15,
        alignItems: 'flex-end'
    },
    poster: {
        width: 70,
        height: 105,
        borderRadius: 5
    },
    detail: {
        marginLeft: 8
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 13,
        color: 'white'
    },
    genre: {
        fontFamily: 'Poppins-Light',
        fontSize: 11,
        color: 'white'
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingText: {
        fontFamily: 'Poppins-Light',
        fontSize: 11,
        color: 'white',
        marginLeft: 5
    }
})