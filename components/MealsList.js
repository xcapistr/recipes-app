import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import MealItem from '../components/MealItem'

const MealsList = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: { mealId: itemData.item.id }
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
