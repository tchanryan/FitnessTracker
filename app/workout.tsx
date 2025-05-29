import "../global.css";
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import Navbar from '../components/Navbar';

export default function Home() {
    // Home screen of the app
    return (
        <View className="flex-1 bg-softbeige">
            <Text className="text-deepteal text-4xl font-heading-bold">
                Workout Page
            </Text>

            <Navbar />
        </View>
    )
}