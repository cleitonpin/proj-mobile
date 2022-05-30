import { RouteProp } from '@react-navigation/native';
import * as React from 'react';
import { GestureResponderEvent, Image, LayoutChangeEvent, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackParams } from '../navigations';

import Albedo from '../assets/imgs/albedo.png'
import skill1 from '../assets/imgs/skill1.png'
import { keyframes } from 'styled-components';
import Table from '../components/Table';

interface CharacterProps {
  route: RouteProp<StackParams, 'character'>
}

export default function Character({ route }: CharacterProps) {

  const { element, imageUrl, name, stars, weapon, character } = route.params
  const scrollViewReder = React.useRef<ScrollView>(null);
  const constellationsRef = React.useRef<View>(null);

  const [scrollY, setScrollY] = React.useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    console.log(e.nativeEvent.layout.height);
    // scrollViewReder.current?.scrollTo({ x, y, animated: true });
  }

  const osPressTouch = () => {
    // get y position of the constellations
    // const y = constellationsRef.current?.getBoundingClientRect().top;
  }

  return (
    <ScrollView style={styles.scrollView} ref={scrollViewReder} >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: imageUrl }} style={{ width: 70, height: 70 }} />

          <View>
            <Text style={styles.title}>{name}</Text>

            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.subtitle, { color: '#49B9BE' }]}>{element}</Text>
              <Text style={[styles.subtitle, { color: '#ffffff' }]}>{weapon}</Text>

            </View>
          </View>
        </View>

        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={() => console.log('teste')}>
            <Text style={styles.buttonText}>Visão geral</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => scrollViewReder.current?.scrollTo({ y: 470, animated: true })}>
            <Text style={styles.buttonText}>Habilidades</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={osPressTouch}>
            <Text style={styles.buttonText}>Constelações</Text>
          </Pressable>
          {/* <Pressable style={styles.button} onPress={() => console.log('teste')}>
            <Text style={styles.buttonText}>Equipamentos</Text>
          </Pressable> */}
          {/* <Pressable style={styles.button} onPress={() => console.log('teste')}>
            <Text style={styles.buttonText}>Ascensão</Text>
          </Pressable> */}
        </View>

        <View style={styles.geral}>
          <Text style={styles.buttonText}>{name}</Text>
          <Text style={[styles.buttonText, { fontSize: 12, color: '#A7B1C1' }]}>
            Lorem ipsum dolor sit amet, consectetur elit.
            Pellentesque maximus laoreet quam a ultricies.
          </Text>
        </View>

        <View style={{ marginTop: 30, justifyContent: 'flex-start', width: '100%', padding: 25 }}>
          <Text style={[styles.buttonText, { fontWeight: 'bold', right: 10 }]}>{route.params.name} Skill Talents</Text>

          {character?.skillTalents.map((char, i) => {
            return (
              <View style={styles.skill} key={i}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                  <Image source={{ uri: char.icon }} style={{ width: 45, height: 45 }} />
                  <Text style={[styles.buttonText, { margin: 10, color: "#ffd780", fontWeight: 'bold' }]}>{char.name}</Text>
                  <Text style={[styles.buttonText, { bottom: 10, fontSize: 14, color: '#a7b1c1', fontWeight: 'bold' }]}>{char.unlock}</Text>
                </View>

                <View style={{ justifyContent: 'flex-start', }}>
                  <Text style={[styles.textSkill, { color: '#A7B1C1', fontSize: 13, }]}>
                    {char.description}
                  </Text>
                  {/* <Text style={styles.textSkill}>Ataque normal</Text>
                  <Text style={styles.textSkill}>Ataque carregado</Text>
                  <Text style={[styles.textSkill, , { color: '#A7B1C1', fontSize: 13 }]}>
                    Pellentesque sit amet dolor non tincidunt
                    placerat sed sit amet metus. Aliquam euismod
                    fringilla nunc at placerat.
                  </Text>
                  <Text style={styles.textSkill}>Ataque imersivo</Text>
                  <Text style={[styles.textSkill, , { color: '#A7B1C1', fontSize: 13 }]}>
                    Pellentesque sit amet dolor non tincidunt
                    placerat sed sit amet metus. Aliquam euismod
                    fringilla nunc at placerat.
                  </Text> */}
                </View>
              </View>
            )
          })}
        </View>

        <View onLayout={onLayout} ref={constellationsRef} style={{ justifyContent: 'flex-start', width: '100%', padding: 25 }}>
          <Text style={[styles.buttonText, { fontWeight: 'bold', right: 10 }]}>{route.params.name} Constellations</Text>
          {character?.constellations.map((char, i) => (
            <View style={styles.skill} key={i}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: char.icon }} style={{ width: 45, height: 45 }} />
                <Text style={[styles.buttonText, { margin: 10, color: "#ffd780", fontWeight: 'bold' }]}>{char.name}</Text>
                <Text style={[styles.buttonText, { bottom: 10, fontSize: 14, color: '#a7b1c1', fontWeight: 'bold' }]}>{char.unlock}</Text>
              </View>
              <View style={{ justifyContent: 'flex-start', }}>
                <Text style={[styles.textSkill, { color: '#A7B1C1', fontSize: 13 }]}>
                  {char.description}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{ justifyContent: 'flex-start', width: '100%', padding: 25 }}>
          <Text style={[styles.buttonText, { fontWeight: 'bold', right: 10 }]}>{route.params.name} Ascension Costs</Text>
          <Text style={[styles.buttonText, { color: '#a7b1c1', fontSize: 13, right: 10, marginBottom: 20, marginTop: 10 }]}>Raiden gets a boost Energy Recharge as they ascend</Text>


          <Table upgrades={character?.upgrades} />
        </View>
      </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  cost: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#222431',
    fontWeight: '600',
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomRightRadius: 4,
    // borderTopLeftRadius: 4,
    fontSize: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#222431',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 0.5,
    backgroundColor: '#222431',
  },
  header: {
    width: '100%',
    backgroundColor: '#636963',
    // height: 106,
    alignItems: 'center',
    padding: 25,
    paddingTop: 60,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Nunito_400Regular',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 21,
    lineHeight: 29,
    marginLeft: 10,
    /* identical to box height */
    color: '#FFFFFF',
  },
  subtitle: {
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    marginLeft: 10,
  },
  buttons: {
    width: '100%',
    paddingBottom: 10
  },
  button: {
    padding: 20,
    backgroundColor: '#36384A',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3
  },
  buttonText: {
    fontFamily: 'Nunito_400Regular',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 21,
    marginLeft: 10,
    /* identical to box height */
    color: '#FFFFFF',
  },
  geral: {
    width: '100%',
    padding: 25,
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#2D3040'
  },
  skill: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#2D3040',
    marginTop: 10,
    padding: 25,
    alignSelf: 'stretch'
  },
  textSkill: {
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 6,
    color: '#FFD579',
  }
})