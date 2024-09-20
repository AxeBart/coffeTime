import { Text, View, ScrollView, Button } from 'react-native';
import { Link, Stack } from 'expo-router';
import { Style } from '@/constants/Style';

function Jump() {
  return (
    <View style={{ marginVertical: 10 }}></View>
  )
}


export default function HomeScreen() {
  return (
    <>
    <Stack.Screen options={{headerShown : false}}/>
    <ScrollView style={Style.view}>
        <View style={Style.container}>
            <View style={{ height : 200, backgroundColor : '#ff7f27'}}>
                <View style={{margin : "auto"}}>
                <Text  style={{color : '#cf661e', fontSize : 28, fontWeight : 900}}>PHOTO</Text>
                </View>
               
            </View>
            <View style={{ backgroundColor : '#cf661e', marginBottom : 10}}>
                <View style={Style.container}>
                    <Text style={{color : 'white', fontSize : 24, fontWeight : 900, paddingVertical : 8}}>
                        Toyota yaris
                    </Text>
                    <Text style={{fontSize: 18 ,color : 'white', paddingVertical : 10}}>
                        Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, error.
                    </Text>

                    <Text style={{textAlign : 'right', fontSize : 24, color : 'white', paddingVertical : 10}}>
                       11400 CDF
                    </Text>
                </View>
            </View>
            <Link href="/Commander">Commander</Link>
            <View style={{marginBottom : 10}}></View>
        </View>
        
    </ScrollView>
    </>
   
  );
}