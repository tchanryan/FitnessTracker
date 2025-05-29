import { Stack } from 'expo-router';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

export default function Layout() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'David Libre': require('../assets/fonts/DavidLibre-Regular.ttf'),
        'Chivo': require('../assets/fonts/Chivo-Regular.ttf'),
        'David Libre Bold': require('../assets/fonts/DavidLibre-Bold.ttf'),
        'Chivo Bold': require('../assets/fonts/Chivo-Bold.ttf'),
      });
      setLoaded(true);
    })();
  }, []);

  if (!loaded) return null; // splash screen for loading if we want to detect sign in already

  return <Stack />;
}