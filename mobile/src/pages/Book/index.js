import React, { useState } from 'react';
import { SafeAreaView, Alert, Text, AsyncStorage,  TouchableOpacity } from 'react-native';

import * as Localization from 'expo-localization';
import moment from 'moment';
import 'moment/min/locales';

import { styles } from './styles';

import api from '../../services/api';

const deviceLanguage = Localization.locale.replace(/_/g, '-').toLowerCase();

moment.locale([ deviceLanguage, 'pt-br' ]);

const DatePicker = require('../../components/DatePicker');

export default function Book({ navigation }){

    const [date, setDate] = useState('');
    const id = navigation.getParam('id');

    async function handleSubmit() {
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${id}/bookings`, { date }, { headers: { user_id } })

        Alert.alert('Solicitação de reserva enviada.');

        navigation.navigate('List');
    }

    function handleCancel(){
        navigation.navigate('List');
    }

    return(
        <SafeAreaView style={styles.container}> 
            
            <Text style={styles.label}> DATA DE INTERESSE *</Text>

            {<DatePicker
                date={date}
                onDateChange={setDate}
                locale={deviceLanguage}
                moment={moment}
            />}
                
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}