import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Rating(){
    return(
        <View>
            <Text style={styles.text}>Rating</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color: 'blue',
        fontFamily: 'Poppins-Medium'
    }
})