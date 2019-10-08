import React from 'react'
import { StyleSheet, Image, View, Text, Button, ScrollView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MEALS } from '../data/dummy-data'
import HeaderIcon from '../components/HeaderIcon'
import DefaultText from '../components/DefaultText'

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={{ ...styles.mealRow, ...styles.details }}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ing, i) => (
        <ListItem key={i}>{ing}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step, i) => (
        <ListItem key={i}>{step}</ListItem>
      ))}
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => {
            console.log('Mark as favourite!')
          }}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    fontSize: 22
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  }
})

export default MealDetailScreen
