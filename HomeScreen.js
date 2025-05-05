import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, Animated, Alert } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import * as Location from 'expo-location';

export default function HomeScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [location, setLocation] = useState(null);
  const [placeName, setPlaceName] = useState('');
  const anim = useRef(new Animated.Value(1)).current;

  const calculate = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return;
    let res = 0;
    if (op === '+') res = a + b;
    else if (op === '-') res = a - b;
    else if (op === '*') res = a * b;
    else if (op === '/') res = b !== 0 ? a / b : 'Error';
    setResult(res);
    Animated.sequence([
      Animated.timing(anim, { toValue: 1.2, duration: 200, useNativeDriver: true }),
      Animated.timing(anim, { toValue: 1, duration: 200, useNativeDriver: true })
    ]).start();
  };

  const fetchLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Location access is required to show your location.');
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc.coords);

    // Reverse geocode to get place name
    const geo = await Location.reverseGeocodeAsync(loc.coords);
    if (geo.length > 0) {
      const place = geo[0];
      const name = `${place.city || place.district || place.region || 'Unknown'}`;
      setPlaceName(name);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Num1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        style={{ borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Num2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Add" onPress={() => calculate('+')} />
      <Animated.Text style={{ fontSize: 24, marginVertical: 10, transform: [{ scale: anim }] }}>
        Result: {result}
      </Animated.Text>

      <Svg height="100" width="200">
        <Circle cx="50" cy="50" r="40" fill="blue" />
        <Rect x="110" y="10" width="80" height="80" fill="red" />
      </Svg>

      <Button title="Get Location" onPress={fetchLocation} />
      {location && (
        <View style={{ marginTop: 20 }}>
          <Text>📍 Latitude: {location.latitude.toFixed(6)}</Text>
          <Text>📍 Longitude: {location.longitude.toFixed(6)}</Text>
          <Text>📌 Location: {placeName}</Text>
        </View>
      )}
    </View>
  );
}
