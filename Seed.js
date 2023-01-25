import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image , Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const bip39 = require('bip39')
const wallet = require('ethereum-hdwallet')
import {createWallet, mnemonicsGenerator} from 'react-native-btc-eth-wallet';
export default function Seed ({navigation}) {
    var key = bip39.generateMnemonic()
    var keys = key.split(' ')
    var status = 0
    const hdWallet = wallet.fromMnemonic(key)
    
  
    const hide = () => {
      for(var i =0;i<12;i++)
      {
        keys[i]="*******";
      }
    }

    return(
        <View style={styles.container}>
        <Button title=' Hide  /  Unhide ' onPress={status = 1}></Button>
        
            <Text/>
            <Text >1 . {keys[0]}</Text>
            <Text >2 . {keys[1]}</Text>
            <Text >3 . {keys[2]}</Text>
            <Text >4 . {keys[3]}</Text>
            <Text >5 . {keys[4]}</Text>
            <Text >6 . {keys[5]}</Text>
            <Text >7 . {keys[6]}</Text>
            <Text >8 . {keys[7]}</Text>
            <Text >9 . {keys[8]}</Text>
            <Text >10 . {keys[9]}</Text>
            <Text >11 . {keys[10]}</Text>
            <Text >12 . {keys[11]}</Text>
            <Text/>
            <Text>{hdWallet.derive().getAddress().toString('hex')}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bigTxt: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize : 20,
  },

  smallTxt: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize : 10,
  },
});