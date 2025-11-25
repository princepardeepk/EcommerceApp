import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import HomeScreen from './src/HomeScreen';
import ProductListing from './src/ProductListing';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';



const Stack = createNativeStackNavigator();


function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <AppContent />
        </SafeAreaProvider>
    );
}

function AppContent() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <View style={styles.container}>

            <SafeAreaView style={styles.container}>
                <Provider store={store}>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Home"
                            screenOptions={({ route, navigation }) => ({
                                headerShown: false,
                            })}
                        >
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen name="ProductListing" component={ProductListing} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </Provider>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
