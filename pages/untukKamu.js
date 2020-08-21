import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

// components
import Carousel, {Pagination} from 'react-native-snap-carousel';
import AkanTayang from '../components/akanTayang';

// icons
import ArrowRight from '../assets/icon/arrow-right.svg';
import FilmVertical from '../components/filmVertical';

// style
import { globalStyle } from '../assets/styles/global';

export default class untukKamu extends Component {

    constructor(){
        super()
        this.state = {
            akanTayang: [
                {
                    "poster_path": "/5MSDwUcqnGodFTvtlLiLKK0XKS.jpg",
                    "id": 12,
                    "backdrop_path": "/8PK4X8U3C79ilzIjNTkTgjmc4js.jpg",
                    "original_title": "The Secret Garden",
                    "vote_average": 7.4,
                },
                {
                    "poster_path": "/yf5IuMW6GHghu39kxA0oFx7Bxmj.jpg",
                    "id": 2,
                    "backdrop_path": "/d7JUXVvjvVCXWs1mlpyO5ESdWdT.jpg",
                    "original_title": "Palm Springs",
                    "vote_average": 7.8,
                },
                {
                    "poster_path": "/5MSDwUcqnGodFTvtlLiLKK0XKS.jpg",
                    "id": 14,
                    "backdrop_path": "/8PK4X8U3C79ilzIjNTkTgjmc4js.jpg",
                    "original_title": "The Secret Garden",
                    "vote_average": 7.4,
                },
                {
                    "poster_path": "/yf5IuMW6GHghu39kxA0oFx7Bxmj.jpg",
                    "id": 5,
                    "backdrop_path": "/d7JUXVvjvVCXWs1mlpyO5ESdWdT.jpg",
                    "original_title": "Palm Springs",
                    "vote_average": 7.8,
                },
            ],
            terbaru: [
                {
                    "poster_path": "/5MSDwUcqnGodFTvtlLiLKK0XKS.jpg",
                    "id": 521034,
                    "backdrop_path": "/8PK4X8U3C79ilzIjNTkTgjmc4js.jpg",
                    "original_title": "The Secret Garden",
                    "vote_average": 7.3,
                  },
                  {
                    "poster_path": "/zQFjMmE3K9AX5QrBL1SXIxYQ9jz.jpg",
                    "id": 579583,
                    "backdrop_path": "/5rwcd24GGltKiqdPT4G2dmchLr9.jpg",
                    "original_title": "The King of Staten Island",
                    "vote_average": 6.8,
                  },
                  {
                    "poster_path": "/yf5IuMW6GHghu39kxA0oFx7Bxmj.jpg",
                    "id": 587792,
                    "backdrop_path": "/d7JUXVvjvVCXWs1mlpyO5ESdWdT.jpg",
                    "original_title": "Palm Springs",
                    "vote_average": 7.6,
                  },
                  {
                    "poster_path": "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
                    "id": 27205,
                    "backdrop_path": "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
                    "original_title": "Inception",
                    "vote_average": 8.3,
                  },
                  {
                    "poster_path": "/v0guO0krvyz8IfKGxEje04LVM9d.jpg",
                    "id": 517412,
                    "backdrop_path": "/4tphk3VbqoRtCVuOzlEQxUrpR6c.jpg",
                    "original_title": "Tesla",
                    "vote_average": 5.8,
                  },
            ],
            terpopuler: [
                {
                    "poster_path": "/bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg",
                    "id": 605116,
                    "backdrop_path": "/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg",
                    "original_title": "Project Power",
                    "vote_average": 6.7,
                  },
                  {
                    "poster_path": "/vFIHbiy55smzi50RmF8LQjmpGcx.jpg",
                    "id": 703771,
                    "backdrop_path": "/owraiceOKtSOa3t8sp3wA9K2Ox6.jpg",
                    "original_title": "Deathstroke: Knights & Dragons - The Movie",
                    "vote_average": 6.8,
                  },
                  {
                    "poster_path": "/5oQJ6HeNGWnEtP9Qyt5IZjuKI7j.jpg",
                    "id": 726664,
                    "backdrop_path": "/s7NC2kntiPB3WltWj9bnNTkoqUp.jpg",
                    "original_title": "Fearless",
                    "vote_average": 6.8,
                  },
                  {
                    "poster_path": "/eAUzmhP54bE1vPXaY7FbuZREJlR.jpg",
                    "id": 594718,
                    "backdrop_path": "/mBbA77FyzhU0Tz9tmbKG8heGmh3.jpg",
                    "original_title": "Спутник",
                    "vote_average": 6.2,
                  },
            ],
            sliderActive: 0
        }
    }

    render(){
        return (
            <ScrollView style={globalStyle.page}>
                {/* Akan Tayang */}
                <View style={styles.section}>
                    <Text style={styles.titleSection}>Akan Tayang</Text>
                    <Carousel
                        ref={(c) => { _carousel = c; }}
                        data={this.state.akanTayang}
                        renderItem={({item}) => (
                            <AkanTayang item={item} />
                        )}
                        sliderWidth={400}
                        itemWidth={310}
                        autoplay={true}
                        onSnapToItem={(index) => this.setState({sliderActive: index})}
                    />
                    <Pagination
                        dotsLength={this.state.akanTayang.length}
                        activeDotIndex={this.state.sliderActive}
                        dotContainerStyle={{
                            height: 10,
                            marginTop: -25
                        }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 8,
                            backgroundColor: '#869791',
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                </View>
                {/* film terbaru */}
                <View style={styles.section}>
                    <View style={styles.headerSection}>
                        <Text style={styles.titleSection}>Film Terbaru</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Terbaru')}>
                            <ArrowRight />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentSection}>
                        <FlatList 
                            horizontal= {true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id.toString() }
                            data={this.state.terbaru}
                            renderItem={({item}) => (
                                <FilmVertical item={item} />
                            )}
                        />
                    </View>
                </View>
                {/* film terpopuler */}
                <View style={styles.section}>
                    <View style={styles.headerSection}>
                        <Text style={styles.titleSection}>Film Terpopuler</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Populer')}>
                            <ArrowRight />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentSection}>
                        <FlatList 
                            showsHorizontalScrollIndicator={false}
                            horizontal= {true}
                            keyExtractor={item => item.id.toString() }
                            data={this.state.terpopuler}
                            renderItem={({item}) => (
                                <FilmVertical item={item} />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    section: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleSection: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        width: 300,
        marginTop: 15,
        marginBottom: 10
    },
    headerSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contentSection: { 
        width: 320 ,
        marginBottom: 20
    }
})