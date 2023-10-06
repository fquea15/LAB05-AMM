import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
    const navigation = useNavigation();

    const handleSwitchToggle = (value) => {
        // Aquí puedes agregar la lógica para activar/desactivar notificaciones
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Configuraciones</Text>

            <View style={styles.opcion}>
                <Text style={styles.opcionTexto}>Notificaciones</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={handleSwitchToggle}
                    value={true} // Cambia esto para reflejar el estado de las notificaciones
                />
            </View>

            <View style={styles.opcion}>
                <Text style={styles.opcionTexto}>Idioma</Text>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.botonTexto}>Español</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Perfil')} // Cambiar por la pantalla de perfil
                style={styles.botonCerrarSesion}
            >
                <Text style={styles.botonCerrarSesionTexto}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
    },
    titulo: {
        fontSize: 30,
        color: 'white',
        marginBottom: 20,
    },
    opcion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    opcionTexto: {
        fontSize: 20,
        color: 'white',
    },
    boton: {
        backgroundColor: '#E50914',
        padding: 10,
        borderRadius: 5,
    },
    botonTexto: {
        fontSize: 16,
        color: 'white',
    },
    botonCerrarSesion: {
        marginTop: 'auto',
        backgroundColor: '#E50914',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    botonCerrarSesionTexto: {
        fontSize: 16,
        color: 'white',
    },
});

export default SettingsScreen;
