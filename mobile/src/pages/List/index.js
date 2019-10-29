import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client'
import { Alert, SafeAreaView, ScrollView, Image, AsyncStorage, View, TouchableOpacity, Text } from 'react-native';

import logo from '../../assets/logo.png'

import SpotList from '../../components/SpotList/index'

import { styles } from './styles'

export default function List({ navigation }){

    const [techs, setTechs] = useState([]);

    async function handleLogout() {
        AsyncStorage.clear();

        navigation.navigate('Login');
    }

    useEffect(()=>{
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://10.0.0.108:3333', {
                query : { user_id }
            })

            socket.on('booking_response', booking => {
                Alert.alert(`Sua reserva na ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`)
            })
        })
    }, []);

    useEffect(()=> {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);

    return  (
        <SafeAreaView styles = {styles.container}>
            <Image style = {styles.logo} source = {logo} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {techs.map(tech => <SpotList key={tech} tech={tech} /> )}

                <TouchableOpacity onPress={handleLogout} style={ styles.button }>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>

            <View style={styles.space}/>
            
            </ScrollView>
        </SafeAreaView>
    )
}