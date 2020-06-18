import React from 'react';
import { Easing, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator, TransitionPresets, CardStyleInterpolators, HeaderStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Colors from '../constants/Colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import FiltersScreen from '../screens/FiltersScreen';



const MealsStack = createStackNavigator();
const FavaStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Filter = createStackNavigator();

function FilterStack() {
  
  return (
    <Filter.Navigator
      screenOptions= {{
        gestureEnabled: true,
        gestureDirection: 'vertical',
        cardStyleInterpolators: CardStyleInterpolators.forFadeFromBottomAndroid,
        transitionSpec: {
          open: config,
          close: closeConfig
        },
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#2f3542' },
        headerTitleStyle: {
          fontFamily: 'open-sans-bold',
          fontSize: 22
        },
        
    }}>
      <Filter.Screen name="Filter" component={FiltersScreen} 
      options={({ route }) => ({ headerRight: () => (
                <View style={{ marginRight: 10 }}>
                <Ionicons 
                    name='ios-save' 
                    size={25} color= 'white' 
                    onPress={() => {
                      route.params.save()
                    }}
                />
                </View>
              ) })}/>
    </Filter.Navigator>
  );

}


const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear
  }
}

function FavouriteStackScreen() {
  return (
    <FavaStack.Navigator 
      screenOptions= {{
        gestureEnabled: true,
        gestureDirection: 'vertical',
        cardStyleInterpolators: CardStyleInterpolators.forFadeFromBottomAndroid,
        transitionSpec: {
          open: config,
          close: closeConfig
        },
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerTitleStyle: {
          fontFamily: 'open-sans-bold',
          fontSize: 22
        }
    }}>
      <FavaStack.Screen name="Favourite" component={FavouriteScreen} options={{
        headerTitle: "Yours Favourite"
      }}/>
      <FavaStack.Screen name="MealDeat" component={MealDetailsScreen}/>
    </FavaStack.Navigator>
  );
}




function MealsStackScreen() {

  return (
    
    <MealsStack.Navigator
      screenOptions= {{
        gestureEnabled: true,
        gestureDirection: 'vertical',
        cardStyleInterpolators: CardStyleInterpolators.forFadeFromBottomAndroid,
        transitionSpec: {
          open: config,
          close: closeConfig
        },
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerTitleStyle: {
          fontFamily: 'open-sans-bold',
          fontSize: 22
        }
      }}
    
      headerMode= "float"
    >
      <MealsStack.Screen name="Categories" component={CategoriesScreen}   options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
            headerLeft: () => (
                <View style={{ marginLeft: 10 }}>
                <Ionicons name='md-menu' size={25} color= 'white' onPress={() => {}}/>
                </View>
              )
        }}/>
      <MealsStack.Screen name="CateMeals" component={CategoryMealsScreen} options={({ route }) => ({ title: route.params.name })}/>
      <MealsStack.Screen name="MealsDetails" component={MealDetailsScreen} options={({ route }) => ({
            title: route.params.name,
            headerStyleInterpolators: HeaderStyleInterpolators.forUIKit,
            headerRight: () => (
                <View style={{ marginRight: 10 }}>
                <Ionicons 
                    name={route.params.isFav ? 'ios-star' : 'ios-star-outline'} 
                    size={25} 
                    color= 'white' 
                    onPress={() => { 
                      route.params.toggleFav()
                      }}
                  />
                </View>
              )
            
           })}

      />
    </MealsStack.Navigator>
    
  );
}
        


const Tab = createBottomTabNavigator();


 function MyTabs() {
  return (  
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-analytics' : 'ios-analytics-outline';
            } else if (route.name === 'Fav') {
              iconName = focused ? 'ios-star' : 'ios-star-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Home" component={MealsStackScreen} />
        <Tab.Screen name="Fav" component={FavouriteStackScreen} />
      </Tab.Navigator>
  );
}

export default function MyDrawer() {
  return (
    <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={MyTabs} />
            <Drawer.Screen name="Filter" component={FilterStack}/>
          </Drawer.Navigator>
    </NavigationContainer>
  );
}



