import React from 'react'


import { styles } from './styles'
import { View, Text } from 'react-native'
import { ListHeaderProps } from './types'


export function ListHeader({ title, subtitle }: ListHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  )
}
