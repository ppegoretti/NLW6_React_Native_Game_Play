import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

import { Text, Image, View, TouchableOpacity } from 'react-native'
import { Avatar } from '../Avatar'

import DiscordImg from '../../assets/discord.png'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import { MemberProps } from './types'


export function Member({ data }: MemberProps) {
  const isOnline = data.status === 'online'
  const { on, primary } = theme.colors;
  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />
      <View>
        <Text style={styles.title}>
          {data.username}
        </Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? on : primary
              }
            ]}
          />
          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  )
}
