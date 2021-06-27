import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import { Guild, ListDivider } from '../../components';


import { styles } from './styles'
import { theme } from '../../global/styles/theme';
import { GuildsProps } from './types'


export function Guilds({ handleGuildSelect }: GuildsProps) {
  const guilds = [
    {
      id: '1',
      name: 'Lendário',
      icon: null,
      owner: true
    },
    {
      id: '2',
      name: 'Lendário',
      icon: null,
      owner: true
    },
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  );
}
