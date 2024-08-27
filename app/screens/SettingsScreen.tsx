import React from 'react';
import { View, Text, Switch, StyleSheet, StatusBar } from 'react-native';

const SettingsScreen: React.FC = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Enable Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#8E44AD" }}
          thumbColor={isEnabled ? "#8E44AD" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#1C1C1E',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8E44AD',
    marginBottom: 16,
    textAlign: 'center',
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#8E44AD',
  },
  settingText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default SettingsScreen;
