import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        margin: 30,
        marginTop: Platform.OS === 'android' ? 50 : 10,
    },

    label: {
        fontWeight:'bold',
        color:'#444',
        marginBottom:8,
    },

    input: {
        borderWidth: 1,
        borderColor:'#ddd',
        paddingHorizontal: 20,
        fontSize:16,
        color:'#444',
        height: 44,
        marginBottom:20,
        borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize:16,
    },

    cancelButton: {
        backgroundColor: '#ccc',
        marginTop: 12,
    },
});