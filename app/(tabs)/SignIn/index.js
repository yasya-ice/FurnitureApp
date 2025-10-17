import AuthHeader from '@/components/AuthHeader'
import Button from '@/components/Button'
import GoogleLogin from '@/components/GoogleLogin'
import Input from '@/components/Input'
import Separator from '@/components/Separator'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import styles from "./styles"

const SignIn = ({navigation}) => { 

    const onBack = () =>  {
        navigation.goBack()
    }

    const onSignup = () => {
      navigation.navigate('Signup')
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In"/>
        <Input label="Email" placeholder="example@gmail.com"/>
        <Input isPassword label="Password" placeholder="*****"/>
        <Button style={styles.button} title="Sign in" />
        <Separator text="Or sign in with"/>
        <GoogleLogin/>
        <Text style={styles.footerText}>Don't have an account?



              <Text onPress={onSignup} style={styles.footerLink}> Sign Up</Text>


          </Text>
      </View>
    </SafeAreaProvider>

 )
}

export default React.memo(SignIn);