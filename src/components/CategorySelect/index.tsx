import React from 'react'


import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { ScrollView } from 'react-native'
import { categories } from '../../utils/categories'
import { Category } from '../Category'
import { CategorySelectProps } from './types'


export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: CategorySelectProps) {
  const { secondary80, secondary100 } = theme.colors
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
            hasCheckedBox={hasCheckBox}
          />
        ))
      }

    </ScrollView>
  )
}
