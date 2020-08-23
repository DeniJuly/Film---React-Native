import React, { Component } from 'react';
import { Text, ImageBackground, View, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import client from '../config/axios';
import API from '../config/apiConfig';

// icons
import Back from '../assets/icon/arrow-left-20.svg';
import CardAktor from '../components/cardAktor';
import FilmVertical from '../components/filmVertical';
import { globalStyle } from '../assets/styles/global';

export default class Detail extends Component {
    constructor(){
        super()
        this.state = {
            film: {
                original_title: '',
                poster_path: '',
                release_date: '',
                genres: [],
                backdrop_path: '',
                runtime: '',
                spoken_languages: [],
                vote_average: ''
            },
            cast: [],
            rekomendations: []
        }
    }

    componentDidMount(){
        const id = this.props.route.params.film.id;
        this.getDetailFilm(id)
        this.getCreditFilm(id)
        this.getRekomendasiFilm(id)
    }
    getDetailFilm = (id) => {
        client.get(`${id}?api_key=${API.key}&language=en-US`)
        .then(res => {
            this.setState({
                film: res.data
            })
        })
    }

    getCreditFilm = (id) => {
        client.get(`${id}/credits?api_key=${API.key}&language=en-US`)
        .then(res => {
            this.setState({
                cast: res.data.cast
            })
        })
    }

    getRekomendasiFilm = (id) => {
        client.get(`${id}/recommendations?api_key=${API.key}&language=en-US`)
        .then(res => {
            this.setState({
                rekomendations: res.data.results.slice(0,10)
            })
        })
    }
    render(){
        let rekomendasi;
        if (this.state.rekomendations.length > 0) {
            rekomendasi = <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Rekomendasi Film</Text>
                    <FlatList 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        data={this.state.rekomendations}
                        renderItem={({item}) => (
                            <FilmVertical item={item} navigation={this.props.navigation}/>
                        )}
                    />
                </View>
            </View>
        }
        return(
            <ScrollView style={globalStyle.page}>
                <ImageBackground
                    source={{
                        uri: 'https://image.tmdb.org/t/p/w1280/'+this.state.film.backdrop_path
                    }}
                    style={styles.background}
                >
                    <View style={styles.filter}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('film')}>
                            <View style={styles.back}>
                                <Back />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.info}>
                            <Image 
                                style={styles.poster}
                                source={{
                                    uri: 'https://image.tmdb.org/t/p/w220_and_h330_face'+this.state.film.poster_path
                                }}
                            />
                            <View style={styles.infoText}>
                                <Text style={styles.judul}>{this.state.film.original_title}</Text>
                                <Text style={styles.tanggal}>{this.state.film.release_date.substr(0,4)}</Text>
                                <View style={styles.genres}>
                                    { this.state.film.genres.map( item => (
                                        <Text style={styles.genre} key={item.id}>{item.name}</Text>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                {/* detail */}
                <View style={styles.container}>
                    <View style={styles.detail}>
                        <View style={{...styles.detailItem,...styles.borderRight}}>
                            <Text style={styles.detailTitle}>Durasi</Text>
                            <Text style={styles.detailText}>{this.state.film.runtime} Menit</Text>
                        </View>
                        <View style={{...styles.detailItem,...styles.borderRight}}>
                            <Text style={styles.detailTitle}>Bahasa</Text>
                            {this.state.film.spoken_languages.map(item => (
                                <Text style={styles.detailText} key={item.iso_639_1}>{item.name}</Text>
                            ))}
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailTitle}>Rating</Text>
                            <Text style={styles.detailText}>{this.state.film.vote_average}</Text>
                        </View>
                    </View>
                </View>
                {/* sinopsis */}
                <View style={styles.container}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Sinopsis</Text>
                        <Text style={styles.sectionText}>{this.state.film.overview}</Text>
                    </View>
                </View>
                {/* aktor */}
                <View style={styles.container}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Aktor</Text>
                        <FlatList 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.cast_id.toString()}
                            data={this.state.cast}
                            renderItem={({item}) => (
                                <CardAktor item={item} />
                            )}
                        />
                    </View>
                </View>
                {/* rekomendasi */}
                { rekomendasi }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 300
    },
    filter: {
        backgroundColor: 'rgba(0,0,0,.4)',
        flex: 1,
        padding: 15
    },
    back: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#ffffffb8',
        paddingTop: 13,
        paddingLeft: 10
    },
    info: {
        flexDirection: 'row',
        marginTop: 70
    },
    poster: {
        width: 100,
        height: 150,
        borderRadius: 3
    },
    infoText: {
        marginLeft: 10,
        flex: 1
    },
    judul: {
        fontFamily: 'Poppins-Medium',
        color: '#fff',
        fontSize: 16
    },
    tanggal: {
        fontFamily: 'Poppins-Light',
        width: 50,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#3d4d9a',
        backgroundColor: 'rgba(63,80,150,.8)',
        color: '#FFF',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    genres: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    genre: {
        fontFamily: 'Poppins-Light',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#3d4d9a',
        backgroundColor: 'rgba(63,80,150,.8)',
        color: '#FFF',
        textAlign: 'center',
        marginRight: 5,
        paddingHorizontal: 3,
        marginTop: 5
    },
    container: {
        paddingTop: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 300,
        marginTop: 10
    },
    detailItem: {
        width: 100
    },
    detailTitle: {
        fontFamily: 'Poppins-Light',
        fontSize: 12,
        textAlign: 'center'
    },
    detailText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        textAlign: 'center'
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: '#dee2e6'
    },
    // sinopsis
    section: {
        width: '100%',
    },
    sectionTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        marginBottom: 10
    },
    sectionText: {
        fontFamily: 'Poppins-Light',
        fontSize: 14
    }
})