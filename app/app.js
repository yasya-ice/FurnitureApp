import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Signup from './(tabs)/signup';

const androidClientId = '263209081521-4o8e2nt8kje6ujdl1njopps0quo4bvqc.apps.googleusercontent.com';
const iosClientId = '263209081521-6u5b4u5r5v1v3jv5n6t1h3jv4q4q4q4q.apps.googleusercontent.com';
const webClientId = '263209081521-4o8e2nt8kje6ujdl1njopps0quo4bvqc.apps.googleusercontent.com';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Signup />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default React.memo(App);
