import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Home from "../componentes/Home";

const HomScreen = () => {
    const navigation = useNavigation()

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
                <Home />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Productos')}
                    style={styles.verMasButton}
                >
                    <Text style={styles.verMasButtonText}>
                        Ver más películas
                    </Text>
                </TouchableOpacity>
                <View style={styles.informacionAdicional}>
                    <Text style={styles.informacionTexto}>
                        Más detalles sobre la película o serie. Puedes incluir una sinopsis más larga o cualquier otra información que quieras mostrar.
                    </Text>
                </View>
            </View>
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
    content: {
        width: '90%',
        marginBottom: 30,
    },
    verMasButton: {
        backgroundColor: '#E50914',
        padding: 10,
        marginTop: '2%',
        width: '50%',
        alignSelf: 'center',
        borderRadius: 10,
    },
    verMasButtonText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },
    informacionAdicional: {
        marginTop: 20,
        backgroundColor: '#222',
        borderRadius: 10,
        padding: 20,
    },
    informacionTexto: {
        fontSize: 16,
        color: "white",
    },
});

export default HomScreen;
