import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import userImg from '../assets/gusta.jpeg'
import fonts from '../styles/fonts';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

const components: React.FC = () => {

  const [user, setUser] = useState<string>('')

  useEffect(() => {
    async function fetchLocalName(){
      const username = await AsyncStorage.getItem('@plantmanager:user')

      setUser(username || '')
    }

    fetchLocalName()
  }, [user])

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{user}</Text>
      </View>

      <Image source={userImg} style={styles.image}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    // paddingHorizontal: 30,
    marginTop: getStatusBarHeight() + 15,

  },
  title:{
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    maxWidth: '70%',
    maxHeight: '100%',
    overflow: 'hidden'
  },

  greeting:{
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40
  },
  userName:{
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
    
  }
})


export default components;