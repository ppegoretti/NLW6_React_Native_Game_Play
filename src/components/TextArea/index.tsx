import React from 'react'


import { styles } from './styles'
import { TextInput } from 'react-native'
import { TextAreaProps } from './types'


export function TextArea({ ...rest }: TextAreaProps) {
  return (
    <TextInput
      style={styles.container}
      {...rest}
    />
  )
}
