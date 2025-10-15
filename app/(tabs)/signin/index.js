import AuthHeader from '@/components/AuthHeader'
import Button from '@/components/button'
import GoogleLogin from '@/components/GoogleLogin'
import Input from '@/components/Input'
import Separator from '@/components/Separator'
import { router } from 'expo-router'
import { Text, View } from 'react-native'
import styles from "./styles"

const signin = () => {

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In"/>
      <Input label="Email" placeholder="example@gmail.com"/>
      <Input isPassword label="Password" placeholder="*****"/>
      <Button style={styles.button} title="Sign in" />
      <Separator text="Or sign in with"/>
      <GoogleLogin/>
      <Text style={styles.footerText}>Don't have an account? <Text style={styles.footerLink} onPress={() => router.push('/(tabs)/signup')}>Sign Up</Text></Text>
    </View>

 )
}

export default signin