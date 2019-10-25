import { StyleSheet, Platform } from 'react-native';


export const styles = StyleSheet.create({

    container: {
        flex: 1,
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