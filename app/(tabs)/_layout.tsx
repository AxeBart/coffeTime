import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { ColorsPalette } from '@/constants/Style';
import { Text } from 'react-native';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarHideOnKeyboard : true
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel : ({focused}) => {
                        return <Text style={{
                            color : focused ? ColorsPalette.high : ColorsPalette.dark,
                            fontSize : 12
                        }}>Acceuil</Text>
                    },

                    tabBarIcon: ({ focused }) => {
                        return <MaterialCommunityIcons name='home' size={30} color={focused ? ColorsPalette.high : ColorsPalette.dark} />
                    }
                }}
            />
            <Tabs.Screen
                name="menue"
                options={{
                    tabBarLabel : ({focused}) => {
                        return <Text style={{
                            color : focused ? ColorsPalette.high : ColorsPalette.dark,
                            fontSize : 12
                        }}>Menu</Text>
                    },

                    tabBarIcon: ({ focused }) => {
                        return <MaterialCommunityIcons name='book-open' size={30} color={focused ? ColorsPalette.high : ColorsPalette.dark} />
                    }
                }}
            />
            <Tabs.Screen
                name="favories"
                
                options={{
                    tabBarLabel : ({focused}) => {
                        return <Text style={{
                            color : focused ? ColorsPalette.high : ColorsPalette.dark,
                            fontSize : 12
                        }}>Favories</Text>
                    },

                    tabBarIcon: ({ focused }) => {
                        return <MaterialCommunityIcons name='heart' size={30} color={focused ? ColorsPalette.high : ColorsPalette.dark} />
                    }
                }}
            />
            <Tabs.Screen
            
                name="profile"
                
                options={{
                    tabBarLabel : ({focused}) => {
                        return <Text style={{
                            color : focused ? ColorsPalette.high : ColorsPalette.dark,
                            fontSize : 12
                        }}>Profile</Text>
                    },
     
                    tabBarIcon: ({ focused }) => {
                        return <MaterialCommunityIcons name='face-man' size={30} color={focused ? ColorsPalette.high : ColorsPalette.dark} />
                    }
                }}
            />
            {/* <Tabs.Screen
                name="cart"
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) => {
                        return <MaterialCommunityIcons name={focused ? 'cart' : 'cart-outline'} size={35} color={focused ? ColorsPalette.high : ColorsPalette.dark} />
                    }
                }}
            /> */}
        </Tabs>
    );
}
