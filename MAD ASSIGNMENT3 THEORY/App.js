import React, { useState, useEffect, createContext, useContext } from 'react';
import {
  Text, View, TextInput, StyleSheet, ActivityIndicator, Switch, useColorScheme
} from 'react-native';
import * as Location from 'expo-location';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Contexts
const UserContext = createContext();
const ThemeContext = createContext();

const HomeScreen = () => {
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setCity('Permission denied');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let geo = await Location.reverseGeocodeAsync(location.coords);
      setCity(geo[0]?.city || 'Unknown City');
      setLoading(false);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" /> : <Text style={styles.text}>City: {city}</Text>}
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  const { name, setName } = useContext(UserContext);

  useEffect(() => {
    navigation.setOptions({ title: name ? `${name}'s Profile` : 'Profile' });
  }, [name]);

  const handleChange = async (value) => {
    setName(value);
    await SecureStore.setItemAsync('username', value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your name"
        value={name}
        onChangeText={handleChange}
      />
    </View>
  );
};

const SettingsScreen = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dark Mode</Text>
      <Switch value={isDark} onValueChange={toggleTheme} />
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [name, setName] = useState('');
  const [isDark, setIsDark] = useState(false);

  // Load name from SecureStore
  useEffect(() => {
    (async () => {
      const storedName = await SecureStore.getItemAsync('username');
      if (storedName) setName(storedName);
    })();
  }, []);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <UserContext.Provider value={{ name, setName }}>
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let icon;
                if (route.name === 'Home') icon = 'home';
                else if (route.name === 'Profile') icon = 'person';
                else icon = 'settings';
                return <Ionicons name={icon} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  text: { fontSize: 20, textAlign: 'center' },
  label: { fontSize: 16, marginBottom: 10 },
  input: {
    borderColor: '#666', borderWidth: 1, borderRadius: 8, padding: 10, fontSize: 16,
  },
});
