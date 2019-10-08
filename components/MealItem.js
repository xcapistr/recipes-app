import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native'

import DefaultText from './DefaultText'

const MealItem = props => {
  return (
    <TouchableOpacity style={styles.mealItem} onPress={props.onSelect}>
      <View>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground
            source={{ uri: props.imageUrl }}
            style={styles.bgImg}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
          <DefaultText>{props.duration}m</DefaultText>
          <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  bgImg: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    paddingHorizontal: 12,
    textAlign: 'center'
  }
})

export default MealItem
