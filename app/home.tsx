import "../global.css";
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import Navbar from '../components/Navbar';

export default function Home() {
    // Home screen of the app
    return (
        <View className="flex-1 bg-softbeige">
            <Text className="text-deepteal text-4xl font-heading-bold">
                Welcome to FeelFit
            </Text>
            <Link href="/index" className="height-20 bg-darkbeige px-10 py-4 rounded-full">
                <Text className="text-lightbeige font-text-regular text-3xl">
                    Index
                </Text>
            </Link>
            <Navbar/>
        </View>
    )
}