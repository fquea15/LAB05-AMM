import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';

const Perfil = () => {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Mi Perfil</Text>
            </View>
            <View style={styles.informacion}>
                <Text style={styles.nombre}>@fquea</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Ajustes')}
                    style={styles.ajustesButton}
                >
                    <FontAwesome5 name="cogs" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.seccion}>
                <Text style={styles.seccionTitulo}>Mis Favoritos</Text>
                <FontAwesome5 name="heart" size={50} color="#E50914" />
                <Text style={styles.contenidoTexto}>Lista de películas favoritas</Text>
            </View>
            <View style={styles.seccion}>
                <Text style={styles.seccionTitulo}>Historial de Visualización</Text>
                <FontAwesome5 name="history" size={50} color="#E50914" />
                <Text style={styles.contenidoTexto}>Historial de visualización</Text>
            </View>
            <View style={styles.seccion}>
                <Text style={styles.seccionTitulo}>Configuraciones</Text>
                <FontAwesome5 name="sliders-h" size={50} color="#E50914" />
                <Text style={styles.contenidoTexto}>Configuraciones del perfil</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#000',
        padding: 20,
    },
    header: {
        marginBottom: 30,
    },
    titulo: {
        fontSize: 30,
        color: 'white',
    },
    informacion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    nombre: {
        fontSize: 20,
        color: 'white',
    },
    ajustesButton: {
        padding: 10,
        borderRadius: 5,
    },
    seccion: {
        marginBottom: 30,
        alignItems: 'center',
    },
    seccionTitulo: {
        fontSize: 25,
        color: 'white',
        marginBottom: 10,
    },
    contenidoTexto: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
});

export default Perfil;
