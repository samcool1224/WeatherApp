import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import axios from 'axios';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  WeatherDetails: { city: string };
};

type WeatherDetailsScreenRouteProp = RouteProp<RootStackParamList, 'WeatherDetails'>;

type Props = {
  route: WeatherDetailsScreenRouteProp;
};

const WeatherDetailsScreen: React.FC<Props> = ({ route }) => {
  const { city } = route.params;
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b64735110700e0bc29c407fcd5e4b6e1&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ActivityIndicator size="large" color="#8E44AD" />
      </View>
    );
  }

  if (!weather) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.errorText}>Could not fetch weather data. Please try again.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.cityName}>{weather.name}</Text>
      <Text style={styles.weatherText}>Temperature: {weather.main.temp}°C</Text>
      <Text style={styles.weatherText}>Weather: {weather.weather[0].description}</Text>
      <Text style={styles.weatherText}>Humidity: {weather.main.humidity}%</Text>
      <Text style={styles.weatherText}>Wind Speed: {weather.wind.speed} m/s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    padding: 16,
  },
  cityName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8E44AD',
    marginBottom: 16,
  },
  weatherText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  errorText: {
    fontSize: 18,
    color: '#E74C3C',
  },
});

export default WeatherDetailsScreen;
