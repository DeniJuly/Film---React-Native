import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

// style
import {globalStyle } from '../assets/styles/global';

// components
import FilmHorizontal from '../components/filmHorizontal';
import client from '../config/axios';

// config
import API from '../config/apiConfig';

class Terpopuler extends Component {
    constructor(){
        super()
        this.state = {
            film: [],
            page: 1,
            isLoading: false,
        }
    }

    componentDidMount(){
        this.setState({isLoading: true}, this.getFilm)
    }

    getFilm = async() => {
        client.get(`popular?api_key=${API.key}&language=en-US&page=${this.state.page}`)
        .then(res => {
            this.setState({
                film: this.state.film.concat(res.data.results),
                isLoading: false
            })
        }).catch(e => {
            this.setState({
                isLoading: false
            })
            console.log(e.error);
        })
    }
    handleLoadMore = () =>{
        this.setState({
            page: this.state.page + 1,
            isLoading: true
        }, this.getFilm)
    }
    loadMoreIndicator = () => {
        return(
            this.state.isLoading ?
            <View style={styles.loadMore}>
                <ActivityIndicator size="large" color="#f19292" />
            </View> : null
        )
    }
    render(){
        return(
            <View style={globalStyle.page}>
                <FlatList
                    style={globalStyle.bodyList}
                    data={this.state.film}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <FilmHorizontal item={item} navigation={this.props.navigation} />
                    )}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={this.loadMoreIndicator}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loadMore: {
        marginVertical: 10,
        alignItems: 'center'
    }
})
export default Terpopuler;