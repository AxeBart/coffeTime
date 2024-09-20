import {ScrollView, Button, View, Text} from 'react-native'
import { Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
export default function Commander() {
    return (
      <>
        <Stack.Screen options={{headerShown : false}}/>
        <View>
            <Text>Table commande</Text>
            <MaterialIcons name='email' size={20}></MaterialIcons>
        </View>  
      </>
    );
  }