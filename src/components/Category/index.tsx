import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, Image, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'
import { CategoryProps } from './types'
import { theme } from '../../global/styles/theme'


export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: CategoryProps) {
  const { secondary50, secondary70 } = theme.colors
  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}>
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check}>
            <Icon width={48} height={48} />
          </View>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </LinearGradient>
    </RectButton >
  )
}
