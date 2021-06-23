import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { ProfileProps } from './types'
import { View, Text } from 'react-native'
import { Avatar } from '../Avatar'
// type BackgroundProps = {
//   children: ReactNode
// }


export function Profile() {
  const { secondary80, secondary100 } = theme.colors
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/ppegoretti.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeeting}>
            Olá
          </Text>
          <Text style={styles.username}>
            Patrick
          </Text>
        </View>
        <Text style={styles.mensage}>
          Hoje é dia de vitória
        </Text>
      </View>
    </View>
  )
}
