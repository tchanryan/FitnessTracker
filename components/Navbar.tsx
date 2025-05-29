"use client";

import "../global.css";
import { View } from 'react-native';
import { Link } from 'expo-router'
import { Dumbbell } from 'lucide-react';

const Navbar = () => {
    return (
        <View className="flex-row justify-between items-center bg-darkbeige p-4 border-t-2">
            <Link href="/workout" className="px-10 py-4 rounded-full">
                
                <Dumbbell color="deepteal" size={24} />
            </Link>

        </View>
    )
}

export default Navbar;