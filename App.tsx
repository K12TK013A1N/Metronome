import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Metronome from './Metronome';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Metronome />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
