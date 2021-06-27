import React from 'react'
import { LinearGradient, } from 'expo-linear-gradient'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'


import { styles } from './styles'
import { View, Text } from 'react-native'
import { HeaderProps } from './types'
import { theme } from '../../global/styles/theme'
import { useNavigation } from '@react-navigation/native'


export function Header({ tittle, action }: HeaderProps) {
  const { secondary100, secondary40, heading } = theme.colors
  const navigation = useNavigation()
  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <LinearGradient style={styles.container} colors={[secondary100, secondary40]}>
      <BorderlessButton>
        <Feather onPress={handleGoBack} name="arrow-left" size={24} color={heading} />
      </BorderlessButton>
      <Text style={styles.title}>
        {tittle}
      </Text >
      {action &&
        <View>
          {action}
        </View>}
    </LinearGradient>
  )
}
