import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'
import MealsList from '../components/MealsList';

const FavouriteScreen = props => {
    
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if( favMeals.length === 0 || !favMeals ) {
        return (
        <View style={styles.content}>
            <Text>No favourite meals found. Start adding some!</Text>
        </View>
        );
    }

    return (
      <MealsList listData={favMeals} navigation={props.navigation}/>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavouriteScreen;