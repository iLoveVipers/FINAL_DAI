import * as React from 'react';
import { View,TextInput, Text, Button, StyleSheet } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function ClipBoard() {
  const [copiedText, setCopiedText] = React.useState('');

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(copiedText);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);

  };

  return (
    <View style={styles.container}>
        <TextInput placeholder='Texto a copiar'
        value={copiedText}
        onChangeText={(value) => setCopiedText(value)}>
        
        </TextInput>
      <Button title="Click here to copy to Clipboard" onPress={copyToClipboard} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },
});