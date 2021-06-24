import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


import { styles } from './styles'
import PlayerSvg from '../../assets/player.svg'

import { theme } from '../../global/styles/theme'
import { AppointmentProps } from './types'

import { RectButton } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import { GuildIcon } from '..'
import { categories } from '../../utils/categories'
// type BackgroundProps = {
//   children: ReactNode
// }


export function Appointment({ data, ...rest }: AppointmentProps) {
  const [category] = categories.filter(item => item.id === data.category)
  const { owner } = data.guild
  const { primary, on } = theme.colors
  return (
    <RectButton  {...rest}>
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>
            <Text style={styles.category}>
              {category.title}
            </Text>
          </View>
          <View style={styles.playerInfo}>
            <PlayerSvg fill={owner ? primary : on} />
            <Text style={[
              styles.player, { color: owner ? primary : on }
            ]}>
              {owner ? 'Anfitrião' : 'Visitante'}
            </Text>
          </View>

        </View>
      </View>

    </RectButton>
  )
}
