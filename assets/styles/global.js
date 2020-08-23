import {StyleSheet} from 'react-native'

export const globalStyle = StyleSheet.create({
    page: { 
        backgroundColor: 'white',
        flex: 1
    },
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
    },
    bodyList: {
        paddingHorizontal: 20
    },
})