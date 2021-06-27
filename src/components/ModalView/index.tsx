import React from 'react'


import { styles } from './styles'
import { Modal, TextInput, View } from 'react-native'
import { ModalViewProps } from './types'
import { Background } from '../Background'


export function ModalView({ children, ...rest }: ModalViewProps) {
  return (
    <Modal
      transparent
      animationType="slide"
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar}>
              {children}
            </View>
          </Background>
        </View>
      </View>

    </Modal>
  )
}
