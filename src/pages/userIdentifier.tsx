import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback, 
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from '../components/button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentifier(){
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  const navigation = useNavigation()

  async function handleSubmit(){
    if(!name){
      return Alert.prompt('Eu preciso saber como vou te chamar!')
    }

    function nameLenght(user: string){
      const userLenght = user.length
      return userLenght
    }

    if(nameLenght(name) > 20){
      return Alert.alert('Nome invalido', 'O nome nao pode ter mais de 20 caracteres')
    }

    await AsyncStorage.setItem('@plantmanager:user', name)

    navigation.navigate('Confirmation')
  }

  function handleInputBlur(){
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus(){
    setIsFocused(false)
  }

  function handleInputChange(value: string){
    setIsFilled(!!value);
    setName(value)
  }

  return(
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.emoji}>
                  🤗 
                </Text>
                
                <Text style={styles.title}>
                  Como podemos {'\n'}
                  Chamar voce?
                </Text>
              </View>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && {borderColor: colors.green}
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                maxLength={20}
              />
              <View style={styles.footer}>
                {!name ?
                  <Button text="Confirmar"  isAvaliable={false} /> :
                  <Button text="Confirmar"  onPress={handleSubmit}/>
                }
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  content: {
    flex: 1,
    width: '100%',
  },

  form:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
    width: '100%',
  },

  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 32,
    marginTop: 28,
  },

  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20,
  },
}) 