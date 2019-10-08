import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native'
import { black } from 'ansi-colors'

const CategoryGridTile = props => {
  let TouchableComp = TouchableOpacity
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback
  }

  return (
    <View style={styles.gridItem}>
      <TouchableComp style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text style={styles.text} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComp>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 }
  },
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right'
  }
})

export default CategoryGridTile
