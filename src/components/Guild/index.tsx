import React from 'react'


import { styles } from './styles'
import { TouchableOpacity, View, Text } from 'react-native'
import { GuildItensProps } from './types'
import { GuildIcon } from '../GuildIcon'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'


export function Guild({ data, ...rest }: GuildItensProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.type}>{data.owner ? 'Administrador' : 'Convidado'}</Text>
        </View>
      </View>
      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </TouchableOpacity>
  )
}
