import React from 'react'
import { Text, Image, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'
import { ButtonAddProps } from './types'
import { theme } from '../../global/styles/theme'


export function ButtonAdd({ ...rest }: ButtonAddProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24} />
    </RectButton >
  )
}
