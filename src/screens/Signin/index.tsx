import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon/index';
import { useNavigation } from '@react-navigation/native';


export function SignIn() {

  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>

      <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />
      <View style={styles.content}>

        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar sues games {'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} onPress={handleSignIn} />
      </View>
    </View>
  );
}
