import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Splash from '.';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Splash />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
