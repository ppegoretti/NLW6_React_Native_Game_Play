import React from 'react'
import { Text, Image, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'
import { GuildIconProps } from './types'


export function GuildIcon() {
  const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDAK1F-m0ENv5L4_9WVSxIrX3d3tAbvvSWQ&usqp=CAU'
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}
