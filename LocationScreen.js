// app/location.js
import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';

export default function LocationScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      Alert.alert('Permission Denied', 'Location access is required.');
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc.coords);
    setErrorMsg('');
  };

  return (
    <View style={styles.container}>
      <Button title="Fetch Location" onPress={getLocation} />
      {location ? (
        <Text style={styles.locationText}>
          Latitude: {location.latitude.toFixed(6)}{"\n"}
          Longitude: {location.longitude.toFixed(6)}
        </Text>
      ) : (
        <Text style={styles.infoText}>Press the button to fetch location</Text>
      )}
      {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  locationText: { fontSize: 16, color: 'green', marginTop: 20, textAlign: 'center' },
  infoText: { fontSize: 16, color: 'gray', marginTop: 20, textAlign: 'center' },
  errorText: { fontSize: 14, color: 'red', marginTop: 10, textAlign: 'center' },
});
