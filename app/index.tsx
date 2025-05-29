import "../global.css"
import { View, Text } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-softbeige">
      <Text className="text-deepteal text-8xl font-heading-bold">FeelFit</Text>
      <Text className="text-brown font-heading-regular text-2xl">Train. Track. Fuel.</Text>
    </View>
  );
}