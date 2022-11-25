import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import LoginScreenTest from './screens/LoginScreen';
import { colors } from './style/colors'; 

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginScreenTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.skyblue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
