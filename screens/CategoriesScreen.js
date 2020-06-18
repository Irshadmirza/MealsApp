import React, { Fragment } from 'react';
import { View, StyleSheet, FlatList, Image} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';
import Ionicons from '@expo/vector-icons';


const CategoriesScreen = ( props) => {

    const renderGridItem = itemData => {
        return (
            
            <CategoryGridTile title={itemData.item.title} onSelect={() => {
                props.navigation.navigate('CateMeals', { 
                    catId: itemData.item.id,
                    name: itemData.item.title
                })
            }} image={itemData.item.image} />
           
           
        );
    };


    return (
        <Fragment>
            {/* <View style={{ marginLeft: 10 }}>
            <Ionicons name='md-menu' size={25} color= 'white' onPress={() => {}}/>
            </View> */}
            <Image source={require('../assets/image.png')} style={styles.img} />
            <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} /> 
        </Fragment>
    );
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerImage: {
        width: '100%',
        height: '60%',
        resizeMode: 'cover'
    },
    flatList: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: '100%',
        height: 250,
        borderBottomLeftRadius: 60
    }
});

export default CategoriesScreen;