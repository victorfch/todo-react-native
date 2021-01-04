import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hola mundo! - componente</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MainScreen;