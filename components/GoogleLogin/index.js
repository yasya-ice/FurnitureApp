import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import { Alert, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

WebBrowser.maybeCompleteAuthSession();

const GoogleLogin = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '263209081521-4o8e2nt8kje6ujdl1njopps0quo4bvqc.apps.googleusercontent.com',
    webClientId: '263209081521-4o8e2nt8kje6ujdl1njopps0quo4bvqc.apps.googleusercontent.com',
    iosClientId: '263209081521-r0ggkuj35h5rna08v0gfue4do6dmplak.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log('✅ Google Token:', authentication.accessToken);
    } else if (response?.type === 'error') {
      Alert.alert('Google Sign-In Error', 'Something went wrong');
    }
  }, [response]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      disabled={!request}
      onPress={() => {
        if (request) promptAsync();
      }}
    >
      <Image
        style={styles.image}
        source={require('../../assets/google.png')}
      />
    </TouchableOpacity>
  );
};

export default React.memo(GoogleLogin);
