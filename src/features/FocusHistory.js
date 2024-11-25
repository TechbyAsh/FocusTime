import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'
import { fontSizes, spacing} from '../utils_/sizes'
import {colors} from '../utils_/colors'





const FocusHistory= ({history}) => {

if(!history || !history.length) return <Text style={styles.title}> You havent focused on anything yet, lets get started!  </Text>

const renderItem = ({item}) => <Text style={styles.item}> - {item}</Text>

  return (
    <View style={styles.container}> 
    <Text style={styles.title}> Our Completed Focus Task </Text>
    <FlatList data={history} renderItem={renderItem} /> 
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    padding: spacing.md
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    paddingTop: spacing.lg
  },
})


export default FocusHistory;  