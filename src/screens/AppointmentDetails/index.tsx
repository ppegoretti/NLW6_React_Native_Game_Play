import React from 'react';
import { FlatList, View, Text, ImageBackground } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons'

import { Background, ButtonIcon, Header, ListDivider, ListHeader, Member } from '../../components';

import { styles } from './styles'
import { theme } from '../../global/styles/theme';


import BannerImg from '../../assets/banner.png'

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'offline'
    },
    {
      id: '2',
      username: 'Ppegoretti',
      avatar_url: 'https://github.com/ppegoretti.png',
      status: 'online'
    }
  ]
  return (
    <Background >
      <Header tittle="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>

          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem preder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ListDivider}
        style={styles.members}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entar na partida" />
      </View>
    </Background >
  );
}
