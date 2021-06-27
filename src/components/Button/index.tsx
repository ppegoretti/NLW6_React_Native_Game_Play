import React from 'react'
import { Text, Image, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import { ButtonProps } from './types'


export function Button({ title, ...rest }: ButtonProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton >
  )
}
