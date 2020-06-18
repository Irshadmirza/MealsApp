import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground} from 'react-native';

const CatergoryGridTile = props => {
    let TouableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
        <ImageBackground style={styles.bgImage} source={props.image}>
        <TouableCmp  style={{flex: 1}} onPress={props.onSelect}>
        <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        </View>
        </TouableCmp>
        </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 5
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    bgImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
});

export default CatergoryGridTile;

