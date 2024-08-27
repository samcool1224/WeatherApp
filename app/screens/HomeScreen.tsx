import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, StatusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  WeatherDetails: { city: string };
  Settings: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [city, setCity] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.label}>Enter City Name:</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="e.g., New York"
        placeholderTextColor="#B3B3B3"
      />
      <Button
        title="Check Weather"
        color="#8E44AD"
        onPress={() => navigation.navigate('WeatherDetails', { city })}
      />
      <Button
        title="Settings"
        color="#8E44AD"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1C1C1E',
    padding: 16,
  },
  label: {
    fontSize: 18,
    color: '#8E44AD',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#8E44AD',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    color: '#FFFFFF',
  },
});

export default HomeScreen;
