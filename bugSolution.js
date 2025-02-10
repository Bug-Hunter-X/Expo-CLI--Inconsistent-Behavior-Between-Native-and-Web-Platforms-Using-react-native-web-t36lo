import React from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';

// Function to conditionally render content depending on the platform
const PlatformSpecificComponent = () => {
  if (Platform.OS === 'web') {
    // Web-specific implementation
    return (
      <View style={styles.webContainer}>
        <Text>This content is only shown on the web!</Text>
      </View>
    );
  } else {
    // Native (iOS/Android) implementation
    return (
      <View style={styles.nativeContainer}>
        <Text>This content is shown only on Native</Text>
      </View>
    );
  }
};

const App = () => {
  return (
    <View style={styles.container}>
      <PlatformSpecificComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webContainer: {
    backgroundColor: 'lightblue',
    padding: 20,
  },
  nativeContainer: {
    backgroundColor: 'lightcoral',
    padding: 20,
  },
});

export default App;