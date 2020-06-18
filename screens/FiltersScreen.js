import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';


const FilterSwitch = props => {
    return (
    <View style={styles.switchContainer}>
        <Text>{props.label}</Text>
        <Switch value={props.state} 
            onValueChange={props.whenChanged} 
            trackColor={{ true: '#4cd137'}}
            thumbColor='#2f3542'
        />
    </View>
    )
}


const FiltersScreen = ({ navigation, route }) => {


    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilter = useCallback(() => {
        const appliedFilter = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            veganFree: isVegan,
            vegetarian: isVegetarian
        };
        console.log(appliedFilter);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        navigation.setParams({ save: saveFilter})
    }, [ saveFilter ])
 
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch 
                label='Gluten-Free' 
                state={isGlutenFree} 
                whenChanged={newValue => setIsGlutenFree(newValue)}
            />
             <FilterSwitch 
                label='Lactose-Free' 
                state={isLactoseFree} 
                whenChanged={newValue => setIsLactoseFree(newValue)}
            />
             <FilterSwitch 
                label='Vegan' 
                state={isVegan} 
                whenChanged={newValue => setIsVegan(newValue)}
            />
              <FilterSwitch 
                label='Vegetarian' 
                state={isVegetarian} 
                whenChanged={newValue => setIsVegetarian(newValue)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    switchContainer: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
    }
});

export default FiltersScreen;
