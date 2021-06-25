import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';

import { Profile, ButtonAdd, CategorySelect, ListHeader, Appointment, ListDivider } from '../../components';

import { styles } from './styles'


export function Home() {
  const [category, setCategory] = useState('')

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 22:40h',
      description: 'É hoje que vamos chegar ao challenger sem preder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Lendários2',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 22:40h2',
      description: 'É hoje que vamos chegar ao challenger sem preder uma partida da md102'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
      <View style={styles.content}>
        <ListHeader title='Partidas agendadas' subtitle='Total 6' />
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => (
            <Appointment data={item} />
          )
          } />
      </View>
    </View >
  );
}
