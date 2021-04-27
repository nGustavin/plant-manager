import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface ButtonProps extends TouchableOpacityProps{
  text?: string;
  isAvaliable?: boolean;
}

export function Button({text, isAvaliable = true, ...rest}: ButtonProps){
  return(
    <TouchableOpacity
      activeOpacity={0.8}  
      style={[
        isAvaliable ?
        styles.container : 
        styles.notAvaliableContainer
      ]}
      {...rest}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  },

  notAvaliableContainer: {
    backgroundColor: colors.gray,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },  
})