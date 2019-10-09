import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'

import MealItem from '../components/MealItem'

const MealsList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id)
    return (
      <MealItem
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite
            }
          })
        }}
        affordability={itemData.item.affordability}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        imageUrl={itemData.item.imageUrl}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})

export default MealsList
