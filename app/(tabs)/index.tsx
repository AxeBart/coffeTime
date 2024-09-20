import { Image, StyleSheet, Text, View, TextInput, Button, ScrollView, StatusBar, ImageBackground, ToastAndroid, ToastAndroidStatic } from 'react-native';
import { Link } from 'expo-router';
import { ColorsPalette, Style } from '@/constants/Style';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
    const [statusBarColor, setStatusBarColor] = useState('default')
    const [coffee, setcoffee] = useState(JSON.parse(`[
    {
        "name" : "Carte noir",
        "price" : 5.99,
        "desc" : "Lorem ipsum dolore amet sit deprata listomb"
    },
    {
        "name" : "Expresso",
        "price" : 5.99,
        "desc" : "Lorem ipsum dolore amet sit deprata listomb"
    },
    {
        "name" : "Vanilla Coffe",
        "price" : 5.99,
        "desc" : "Lorem ipsum dolore amet sit deprata listomb"
    },
    {
        "name" : "Carioca",
        "price" : 5.99,
        "desc" : "Lorem ipsum dolore amet sit deprata listomb"
    }
]`))

    const a = 'default'
    useEffect(() => {
        setStatusBarColor('default')

    }, [])

    return (
        <>
            <StatusBar barStyle={a} />

            <ImageBackground source={require('@/assets/images/coffee.png')} style={{ height: 120, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, marginVertical :'auto' }}>
                
                
                <View style={{marginHorizontal: 10, flex : 1, justifyContent : 'space-between', flexDirection : 'row', alignItems :  'center', marginTop : 30 }}>
                    <View>
                        <Text style={[{ color: '#FFF' }, inputStyle.bigTitle]}>Coffee Time</Text>
                    </View>
                    <View >
                        <View style={{width : 10, height : 10, backgroundColor : ColorsPalette.high, borderRadius : 50, position : 'absolute', zIndex : 1, right : 2, top : 4}}></View>
                        <MaterialCommunityIcons name='bell' size={30} color='#FFF'/>
                    </View>
                </View>

            </ImageBackground>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[{ paddingVertical: 15 }, Style.container]}>
                    <Text style={inputStyle.h3}>Now in</Text>
                </View>
                <ScrollView horizontal={true} style={{ marginHorizontal: 0 }} showsHorizontalScrollIndicator={false}>
                    {coffee.map((data: any, index: number) => (
                        <CardTop key={index} name={data.name} price={data.price} />
                    ))}
                </ScrollView>

                <Text style={[inputStyle.h3, Style.container, { paddingVertical: 15 }]}>Most Ordered</Text>
                <View style={Style.container}>
                    {coffee.map((data: any, index: number) => (
                        <MostCard key={index} name={data.name} desc={data.desc} price={data.price} />
                    ))}
                </View>

            </ScrollView>


        </>

    );
}


function MostCard(props: any) {


    const add = () => {
        
        // alert(props.id)
        // ToastAndroid.show('', 3000)
    }
    return (
        <>
            <View style={{ backgroundColor: 'white', borderRadius: 20, marginBottom: 20 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{
                        backgroundColor: '#fff7f1', width: 100, borderRadius: 15
                    }}>

                    </View>

                    <View style={{ flex: 1, justifyContent: 'space-between' }}>
                        <View style={{ padding: 10 }}>
                            <Text style={inputStyle.h4}>
                                {props.name}
                            </Text>
                            <Text>
                                {props.desc}
                            </Text>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', position: 'relative', bottom: 0 }}>
                            <View style={Style.container}>
                                <Text style={inputStyle.h4}>
                                    $ {props.price}
                                </Text>
                            </View>

                            <View style={{ position: 'relative', flex: 1, alignItems: 'flex-end' }}>
                                <Ionicons onPress={add} name="add" color='white' size={30} style={{ paddingHorizontal: 10, backgroundColor: ColorsPalette.high, textAlign: 'center', borderBottomRightRadius: 15, borderTopLeftRadius: 20 }} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

function CardTop(props: any) {
    return (
        <>
            <View style={{ backgroundColor: 'white', borderRadius: 20, marginHorizontal: 10 }}>
                <View style={{ padding: 10 }}>
                    <View style={{
                        height: 100, backgroundColor: '#fff7f1', width: 100, borderRadius: 15
                    }}>

                    </View>
                    <Text style={inputStyle.h4}>
                        {props.name}
                    </Text>
                </View>
                <View style={{
                    flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'
                }}>
                    <View style={Style.container}>
                        <Text style={inputStyle.h4}>
                            $ {props.price}
                        </Text>
                    </View>

                    <View style={{ position: 'relative', bottom: 0, flex: 1, alignItems: 'flex-end' }}>
                        <Ionicons name="add" color='white' size={30} style={{paddingHorizontal: 5, backgroundColor: ColorsPalette.high, textAlign: 'center', borderBottomRightRadius: 15, borderTopLeftRadius: 20 }} />
                    </View>
                </View>

            </View>

        </>
    )

}
const inputStyle = StyleSheet.create({
    container: {
        backgroundColor: '#fff7f1',
        marginHorizontal: 20,
        borderRadius: 50,
        marginVertical: 10,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        height: 30

    },
    input: {
        flex: 1,
        paddingHorizontal: 15,
        borderBlockColor: 'red'
    },
    items: {

    },
    bigTitle: {
        fontWeight: '600',
        fontSize: 34,
        // paddingVertical: 10
    },
    h1: {
        fontWeight: '600',
        fontSize: 30,
        paddingVertical: 10
    },
    h2: {
        fontWeight: '600',

        fontSize: 26
    },
    h3: {
        fontWeight: '600',
        fontSize: 22,
    },
    h4: {
        fontWeight: '600',
        fontSize: 18,
    },
})