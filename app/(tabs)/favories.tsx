import { Text, Button, View } from 'react-native';
import { Link } from 'expo-router';

import { useEffect, useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Style } from '@/constants/Style';

export default function Settings() {
    const [num, setNum] = useState(0)
    const increment = () => {
        setNum(num + 1)
    }
    return (
        <View>
            <ThemedView style={Style.navigator}>
                <ThemedText type='title' style={Style.container}>
                    <Text>Settings</Text>
                    
                </ThemedText>
            </ThemedView>

            <ThemedView style={Style.container}>
            <Link href='/settings'>Trouver</Link>
              
            </ThemedView>
            <View style={Style.container}>
                
                <Text> Nous sommes à : {num}</Text>
            </View>
        </View>

    );
}

