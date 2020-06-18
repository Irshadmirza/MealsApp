import React from 'react';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList';

const CategoryMealsScreen = ({ route, navigation }) => {
    
    const { catId } = route.params;

    const availableMeals = useSelector(state => state.meals.filterMeals)

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <MealsList listData={displayedMeals} navigation={navigation}/>
    );
};

export default CategoryMealsScreen;