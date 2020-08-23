import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function CardAktor({item}){
    return(
        <View style={styles.card}>
            <Image 
                style={styles.image}
                source={{
                    uri: 'https://image.tmdb.org/t/p/w138_and_h175_face'+item.profile_path
                }}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.character}>{item.character}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 120
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        alignSelf: 'center'
    },
    name: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        textAlign: 'center'
    },
    character: {
        fontFamily: 'Poppins-Light',
        fontSize: 13,
        textAlign: 'center'
    }
})