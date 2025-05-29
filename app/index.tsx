import "../global.css"
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  // App start up screen
  return (
    <View className="flex-1 justify-center items-center bg-softbeige">
      <Text className="text-deepteal text-8xl font-heading-bold">
        FeelFit
      </Text>
      <Text className="text-brown font-heading-regular text-2xl">
        Train. Track. Fuel.
      </Text>
      <Link href="/home" className="m-20 bg-darkbeige px-10 py-4 rounded-full">
        <Text className="text-softbeige font-text-bold text-1xl">
          Continue
        </Text>
      </Link>
      
    </View>
  );
}