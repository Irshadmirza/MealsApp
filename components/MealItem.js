import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground} from 'react-native';

const MealItem = props => {
    let TouableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.mealItem}>
        <TouableCmp  style={{flex: 1}} onPress={props.onSelectMeal}>
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                    <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    </View>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetails}}>
                    <Text style={styles.details}>{props.duration}m</Text>
                    <Text style={styles.details}>{props.complexity.toUpperCase()}</Text>
                    <Text style={styles.details}>{props.affordability.toUpperCase()}</Text>
                </View>
            </View>
        </TouableCmp>
        </View>
    );
}

const styles = StyleSheet.create({
    mealRow: { 
        flexDirection: 'row',
        
    },
    mealItem: {
        marginTop: 10,
        height: 200,
        width: '90%',
        backgroundColor: '#3d3d3d',
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: 30
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    mealHeader: {
        height: '90%'
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    bgImage:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    details: {
        fontFamily: 'open-sans',
        fontSize: 15,
        color: 'white'
    }
}); 

export default MealItem;