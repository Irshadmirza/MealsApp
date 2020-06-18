import React, { useEffect, useCallback }  from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch  } from 'react-redux';
import { CommonActions } from '@react-navigation/native';


import { toggleFavorite } from '../store/actions/meals';


const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    );
}

const MealDetailsScreen = ( { route, navigation } ) => {

    const availableMeals = useSelector(state => state.meals.meals);

    const { mealId } = route.params;

    const selectedMeals = availableMeals.find(meal => meal.id === mealId);

    const currentMealIsFav = useSelector(state => 
        state.meals.favoriteMeals.some(meal => meal.id === mealId)
    )

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        navigation.setParams({ toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler])

    useEffect(() => {
        navigation.setParams({ isFav: currentMealIsFav})
    }, [currentMealIsFav])

    return (
        <ScrollView>
        <Image source={{ uri: selectedMeals.imageUrl }} style={styles.image}/>
        <View style={styles.details}>
            <Text style={styles.details}>{selectedMeals.duration}m</Text>
            <Text style={styles.details}>{selectedMeals.complexity.toUpperCase()}</Text>
            <Text style={styles.details}>{selectedMeals.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeals.ingredients.map(ingredient => (
            <ListItem key={ingredient}>{ingredient}</ListItem> 
        ))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeals.steps.map(step => (
            <ListItem key={step}>{step}</ListItem>
        ))}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 20
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
      }
});

export default MealDetailsScreen;