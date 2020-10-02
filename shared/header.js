import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export function Header() {

    return (
        <View style={styles.header}> 
            <Text style={styles.headerText}>GameZone</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#333',
        letterSpacing: 1,
    }
})


export default Header;