import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        marginTop: 12,
    },
    
    title: {
        fontSize: 20, 
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 10,
    },

    bold: {
        fontWeight: 'bold',
    },

    list: {
        paddingHorizontal: 20,
    },

    listItem: {
        marginRight: 15,
    },

    thumbnail: {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2,
    },

    company: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 7,
    },

    price: {
        fontSize: 15,
        color: '#999',
        marginTop: 1,
    },

    button: {
        height: 32,
        backgroundColor: '#f05a5b',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
        marginTop: 10,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize:15,
    },
});