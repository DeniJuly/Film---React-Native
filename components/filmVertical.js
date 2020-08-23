import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Star from '../assets/icon/star-10.svg';

export default function FilmVertical({item, navigation}){
    return (
        <TouchableOpacity onPress={() => {
            if (navigation.dangerouslyGetParent() != undefined) {
                navigation.dangerouslyGetParent().push('Detail',{ film: item})
            } else {
                navigation.push('Detail',{ film: item})
            }
        }}>
            <View style={styles.container}>
                <Image 
                    source={{
                        uri: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'+item.poster_path
                    }}
                    style={styles.poster}
                />
                <Text style={styles.title}>{item.original_title}</Text>
                <View style={styles.rating}>
                    <Star />
                    <Text style={styles.ratingText}>{item.vote_average}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        marginRight: 5
    },
    poster: {
        width: 80,
        height: 121,
        borderRadius: 5,
        overflow: 'hidden'
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 13,
        marginTop: 5
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingText: {
        fontFamily: 'Poppins-Light',
        fontSize: 11,
        marginLeft: 5
    }
})