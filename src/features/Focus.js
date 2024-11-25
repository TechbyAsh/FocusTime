import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils_/colors';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton'
import { spacing } from '../utils_/sizes'

const Focus = ( {addSubject} ) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        /> 
        <View style={styles.button}>  
        <RoundedButton title= "+" size={50} onPress= {() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: colors.platinum,
    paddingBottom: spacing.md
  },

  button: {
    justifyContent: 'center'
  },
  textInput: { 
    flex: 1,
    marginRight: spacing.sm,

  },

  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  },
}); 

export default Focus;
