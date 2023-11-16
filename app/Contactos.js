import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function Contactos() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Emails],
                    fields: [Contacts.Fields.PhoneNumbers],
                })
                if (data.length > 0) {
                    setContacts(data)
                }
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Text style={styles.texto}>Nombre del contacto:</Text>
                            <Text style={styles.texto1}>{item.name}</Text>
                            <Text style={styles.texto}>Numero del contacto:</Text>
                            <Text style={styles.texto1}>{item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].number}</Text>
                            <Text>--------------------------------</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 6,
        marginBottom: 6,
        
    },
    texto: {
        margin: 2,
        backgroundColor: 'lightgrey',
    },
    texto1: {
        margin: 2,
        color: 'red',
    }
});