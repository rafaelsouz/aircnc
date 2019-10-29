import { StyleSheet, Platform } from 'react-native';


export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    button: {
        height: 42,
        marginTop: 30,
        margin: 15,
        backgroundColor: '#808080',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize:16,
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf:'center',
        marginTop: Platform.OS === 'android' ? 30 : 10,
    },

    space: {
        width: 100,
        height: 100,
    },
    
});