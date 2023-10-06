import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Home = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.contacto}>
                <Text style={styles.titulo}>Último Estreno</Text>
                <Image source={{ uri: "https://fondosmil.com/fondo/41073.png" }} style={styles.imagenportada} />
                <View style={styles.informacion}>
                    <Text style={styles.subtitulo}>Título de la Serie o Película</Text>
                    <Text style={styles.descripcion}>
                        Descripción de la serie o película. Aquí puedes incluir una sinopsis o información adicional.
                    </Text>
                    <View style={styles.botonContainer}>
                        <Text style={styles.botonTexto}>Reproducir</Text>
                    </View>
                </View>
            </View>
            <StatusBar style='auto' />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingVertical: 30,
    },
    titulo: {
        fontSize: 30,
        color: "white",
        textAlign: 'center',
        marginBottom: 10,
    },
    imagenportada: {
        height: 300,
        width: '100%',
        borderRadius: 10,
    },
    contacto: {
        width: "90%",
        marginBottom: 30,
    },
    informacion: {
        marginTop: 20,
        backgroundColor: '#222',
        borderRadius: 10,
        padding: 20,
    },
    subtitulo: {
        fontSize: 20,
        color: "white",
        marginBottom: 10,
    },
    descripcion: {
        fontSize: 16,
        color: "white",
        marginBottom: 20,
    },
    botonContainer: {
        backgroundColor: '#E50914',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    botonTexto: {
        color: 'white',
        fontSize: 20,
    },
});

export default Home;
