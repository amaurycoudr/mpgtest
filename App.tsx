import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import PlayerDetailScreen from './src/screens/PlayerDetailScreen';
import PlayersScreen from './src/screens/PlayersScreen';

const Stack = createStackNavigator();
function LogoTitle() {
    return (
        <Image
            resizeMode="contain"
            style={{ width: 98 }}
            source={require('./assets/Logo_MPG.png')}
        />
    );
}
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#45C945',
                    },
                    headerTintColor: '#fff',
                    headerTitle: () => <LogoTitle />,
                }}
                initialRouteName="Players"
            >
                <Stack.Screen
                    name="Players"
                    component={PlayersScreen}
                    options={{
                        headerTitle: () => <LogoTitle />,
                    }}
                />
                <Stack.Screen name="Player" component={PlayerDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
