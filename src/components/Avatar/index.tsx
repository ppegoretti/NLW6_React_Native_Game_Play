import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

import { Text, Image, View, TouchableOpacity } from 'react-native'

import DiscordImg from '../../assets/discord.png'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import { AvatarProps } from './types'


export function Avatar({ urlImage }: AvatarProps) {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}>
      <Image
        source={{ uri: urlImage }}
        style={styles.image}
      >

      </Image>
    </LinearGradient>
  )
}
