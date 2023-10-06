import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import * as Datos from '../Datos';

const Productos = () => {

    const productos = Datos.catalogo;

    return (
        <View style={styles.container}>
            <Text style={styles.titu}>Series</Text>
            <StatusBar style='auto' />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.con}>
                    {productos.map((x, index) =>
                        <View key={index} style={styles.productoContainer}>
                            <Image source={{ uri: x.imagen }} style={styles.image} />
                            <Text style={styles.nombre}>{x.titulo}</Text>
                            <Text style={styles.descripcion}>{x.descripcion}</Text>
                            <Button title="Ver más" color="#E50914" onPress={() => {}} />
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        paddingTop: 20,
    },
    titu :{
        backgroundColor: '#E50914',
        color:"white",
        fontSize: 35,
        paddingVertical: 10,
        textAlign: "center",
        marginBottom: 10,
    },
    scrollContainer: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    con : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    productoContainer: {
        backgroundColor: '#282828',
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden',
        elevation: 5,
        width: 220, // Ancho fijo de la tarjeta
    },
    image: {
        height: 220,
        width: '100%',
        aspectRatio: 16/9,
    },
    nombre:{
        color: 'white',
        fontSize: 20,
        padding: 10,
        textAlign: "center",
        marginBottom: 5,
    },
    descripcion: {
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default Productos;
