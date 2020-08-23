import React, { Component, PureComponent } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

export default class FilmHorizontal extends PureComponent {

    render(){
        return(
            <TouchableOpacity onPress={() => this.props.navigation.dangerouslyGetParent().push('Detail',{ film: this.props.item})}>
                <View style={styles.container}>
                    <Image
                        style={styles.poster} 
                        source={{
                            uri: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'+this.props.item.poster_path
                        }}
                    />
                    <View
                        style={styles.detail}
                    >
                        <Text style={styles.itemTitle}>{this.props.item.original_title}</Text>
                        <Text style={styles.date}>{ this.props.item.release_date.substr(0,4) }</Text>
                        <View
                            style={styles.rating}
                        >
                            <Text
                                style={styles.ratingText}
                            >{this.props.item.vote_average}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginBottom: 8,
        flexDirection: 'row',
    },
    poster: {
        width: 90,
        height: 134,
        borderRadius: 3
    },
    detail: {
        marginLeft: 10
    },
    itemTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        width: 218
    },
    date: {
        fontFamily: 'Poppins-Light',
        fontSize: 13
    },
    rating: {
        paddingHorizontal: 5,
        backgroundColor: 'rgba(246,209,134,.65)',
        borderWidth: 1,
        borderColor: '#f6d186',
        borderRadius: 3,
        width: 40,
        marginTop: 20
    },
    ratingText: {
        fontFamily: 'Poppins-Light',
        fontSize: 13,
        textAlign: 'center'
    }
})