import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { sharedLib } from '@test-monorepo/shared-lib';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text>Shared Lib Name: {sharedLib()}</Text> */}
      <Text>{'Welcome to mobile app!'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
