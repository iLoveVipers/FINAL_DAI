import { StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

// expo install expo-sms

export default function App() {
  return(<AppNavigator />)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});