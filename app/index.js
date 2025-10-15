import { router } from 'expo-router';
import React from "react";
import { Image, Pressable, Text, View } from 'react-native';
import Button from "../components/button";
import { styles } from "./styles";

const Splash = () => {

    return (
        <View style={styles.container}>
            <Image  resizeMode="contain" style={styles.image} source={require('../assets/images/splash_image.png')}/>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll find</Text>
                <Text style={[styles.innerTitle, styles.title]}> All you need </Text>
                <Text style={styles.title}>Here!</Text>
            </View>


            <Button title="Sign Up" onPress={() => router.push('/(tabs)/signup')}/>

            <Pressable hitSlop={20}>
                <Text style={styles.footerText} onPress={() => router.push('/(tabs)/signin')}>Sign In</Text>
            </Pressable>
        </View>
    )
}

export default Splash;