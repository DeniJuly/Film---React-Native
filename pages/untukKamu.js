import React, { useState, Component } from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

// components
import Carousel, {Pagination} from 'react-native-snap-carousel';
import AkanTayang from '../components/akanTayang';

// icons
import ArrowRight from '../assets/icon/arrow-right.svg';
import FilmVertical from '../components/filmVertical';

// style
import { globalStyle } from '../assets/styles/global';
import client from '../config/axios';

// config
import API from '../config/apiConfig';
import Axios from 'axios';

export default class untukKamu extends Component {

    constructor(){
        super()
        this.state = {
            akanTayang: [],
            terbaru: [],
            terpopuler: [],
            sliderActive: 0,
            genre: []
        }
    }

    componentDidMount(){
        client.get(`upcoming?api_key=${API.key}&language=en-US&page=1`)
        .then(res => {
            this.setState({
                akanTayang: res.data.results.slice(0,6)
            })
        })
        client.get(`now_playing?api_key=${API.key}&language=en-US&page=1`)
        .then(res => {
            this.setState({
                terbaru: res.data.results.slice(0,6)
            })
        })
        client.get(`popular?api_key=${API.key}&language=en-US&page=1`)
        .then(res => {
            this.setState({
                terpopuler: res.data.results.slice(0,6)
            })
        })
        Axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API.key}&language=en-US`)
        .then(res => {
            this.setState({
                genre: res.data.genres
            })
        })
    }

    render(){
        return (
            <ScrollView style={globalStyle.page}>
                {/* Akan Tayang */}
                <View style={globalStyle.section}>
                    <Text style={globalStyle.titleSection}>Akan Tayang</Text>
                    <Carousel
                        ref={(c) => { _carousel = c; }}
                        data={this.state.akanTayang}
                        renderItem={({item}) => (
                            <AkanTayang item={item} navigation={this.props.navigation} genre={this.state.genre}/>
                        )}
                        sliderWidth={400}
                        itemWidth={310}
                        autoplay={true}
                        autoplayInterval={3000}
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
                <View style={globalStyle.section}>
                    <View style={globalStyle.headerSection}>
                        <Text style={globalStyle.titleSection}>Film Terbaru</Text>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Terbaru')}>
                            <ArrowRight />
                        </TouchableOpacity>
                    </View>
                    <View style={globalStyle.contentSection}>
                        <FlatList 
                            horizontal= {true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id.toString() }
                            data={this.state.terbaru}
                            renderItem={({item}) => (
                                <FilmVertical item={item} navigation={this.props.navigation}/>
                            )}
                        />
                    </View>
                </View>
                {/* film terpopuler */}
                <View style={globalStyle.section}>
                    <View style={globalStyle.headerSection}>
                        <Text style={globalStyle.titleSection}>Film Terpopuler</Text>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Populer')}>
                            <ArrowRight />
                        </TouchableOpacity>
                    </View>
                    <View style={globalStyle.contentSection}>
                        <FlatList 
                            showsHorizontalScrollIndicator={false}
                            horizontal= {true}
                            keyExtractor={item => item.id.toString() }
                            data={this.state.terpopuler}
                            renderItem={({item}) => (
                                <FilmVertical item={item} navigation={this.props.navigation}/>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}