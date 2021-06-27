import React from 'react'


import { styles } from './styles'
import { View, Text, TextInput } from 'react-native'
import { SmallInputProps } from './types'


export function SmallInput({ ...rest }: SmallInputProps) {
  return (
    <TextInput
      style={styles.container}
      keyboardType="numeric"
      {...rest}
    />
  )
}
