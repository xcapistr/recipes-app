import React from 'react'
import { Item, HeaderButtons } from 'react-navigation-header-buttons'

import HeaderIcon from '../components/HeaderIcon'
import MealsList from '../components/MealsList'
import { MEALS } from '../data/dummy-data'

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
  return <MealsList listData={favMeals} navigation={props.navigation} />
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

export default FavoritesScreen
