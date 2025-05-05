// app/(tabs)/index.tsx
import { useEffect } from 'react';
import { useRouter, useNavigationContainerRef } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Wait for layout mount before navigating
    const timeout = setTimeout(() => {
      router.replace('./LoginScreen');
    }, 100); // small delay to allow layout to mount

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
