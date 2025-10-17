import AuthHeader from "@/components/AuthHeader";
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import GoogleLogin from '@/components/GoogleLogin';
import Input from '@/components/Input';
import Separator from '@/components/Separator';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from "./styles";

const Signup = ({navigation}) => {

    const [checked, setChecked] = useState(false)
    
    const onBack = () =>  {
        navigation.goBack()
    }

    const onSignin = () =>  {
        navigation.navigate('Signin')
    }

    return (
        <SafeAreaProvider>
            <View style={styles.container}>

                <AuthHeader onBackPress={onBack} title="Sign up"/>
                <Input label="Name" placeholder="John Doe"/>
                <Input label="Email" placeholder="example@gmail.com"/>
                <Input isPassword label="Password" placeholder="*******"/>

                <View style={styles.agreeRow}>

                    <Checkbox checked={checked} onCheck={setChecked}/>
                    <Text style={styles.agreeText}>I agree with 
                        <Text style={styles.agreeTextBold}> Terms</Text> & 
                        <Text style={styles.agreeTextBold}> Privacy</Text>
                    </Text>
                </View>

                <Button style={styles.button} title="Sign Up"/>
                <Separator text="Or sign up with"/>
                <GoogleLogin/>
                <Text style={styles.footerText}>Already have an account? <Text style={styles.footerLink} onPress={() => router.push('/(tabs)/signin')}>Sign In</Text></Text>

            </View>
        </SafeAreaProvider>
    )
}

export default React.memo(Signup);