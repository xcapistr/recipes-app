import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Item, HeaderButtons } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import HeaderIcon from '../components/HeaderIcon'
import MealsList from '../components/MealsList'
import DefaultText from '../components/DefaultText'

const FavoritesScreen = props => {
  const availableMeals = useSelector(state => state.meals.favoriteMeals)

  if (availableMeals.length === 0 || !availableMeals){
    return <View style={styles.content}>
      <DefaultText>No favorite meals found. Start adding some!</DefaultText>
    </View>
  }

  return <MealsList listData={availableMeals} navigation={props.navigation} />
}

FavoritesScreen.navigationOptions = navData => {
  return {
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoritesScreen
