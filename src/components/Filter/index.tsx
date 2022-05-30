import React from "react"
import { StyleSheet, View } from "react-native"
import { Image } from "react-native-elements"


import Gelo from '../../assets/imgs/gelo2.png';
import Terra from '../../assets/imgs/terra.png';
import Raio from '../../assets/imgs/raio.png';
import Vento from '../../assets/imgs/vento.png';
import Fogo from '../../assets/imgs/fogo.png';

import Arco from '../../assets/imgs/bow.png';
import Espadao from '../../assets/imgs/broadsword.png';
import Espada from '../../assets/imgs/sword.png';
import Lanca from '../../assets/imgs/spear.png';
import Livro from '../../assets/imgs/book.png';

interface FilterProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Filter: React.FC<FilterProps> = ({ setSearch }) => {

  const onSearch = (text: string) => {
    setSearch((old) => old === text ? '' : text)
  }

  return (
    <View style={styles.options}>
      <View style={styles.group}>
        <Image onPress={() => onSearch('Anemo')} style={styles.element} source={Vento} />
        <Image onPress={() => onSearch('Cryo')} style={styles.element} source={Gelo} />
        <Image onPress={() => onSearch('Electro')} style={styles.element} source={Raio} />
        <Image onPress={() => onSearch('Geo')} style={styles.element} source={Terra} />
        <Image onPress={() => onSearch('Pyro')} style={styles.element} source={Fogo} />
      </View>
      {/* <View style={styles.group}>
        <Image onPress={() => setSearch(prevState )} style={{ width: 35, height: 35 }} source={Arco} />
        <Image onPress={() => setSearch(prevState )} style={{ width: 35, height: 35 }} source={Livro} />
        <Image onPress={() => setSearch(prevState )} style={{ width: 35, height: 35 }} source={Espadao} />
        <Image onPress={() => setSearch(prevState )} style={{ width: 35, height: 35 }} source={Lanca} />
        <Image onPress={() => setSearch(prevState )} style={{ width: 35, height: 35 }} source={Espada} />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#1D1F29',
    width: '100%',
    height: 123,
    marginTop: 20
  },
  group: {
    // padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    // margin: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  element: {
    width: 35,
    height: 35,
    margin: 8
  },
})

export default Filter;