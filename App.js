import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, ScrollView, Switch, ImageBackground } from 'react-native';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [securityType, setSecurityType] = useState('WPA');
  const [isHidden, setIsHidden] = useState(false);
  const [qrValue, setQrValue] = useState('');

  const generateQRCode = () => {
    const wifiString = `WIFI:S:${ssid};T:${securityType};P:${password};H:${isHidden};;`;
    setQrValue(wifiString);
  }
  
  return (
    <View style={styles.backgroundContainer}
  >
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>WLAN QR-Code Generator</Text>

      <View style={styles.inputContainer}>
          <Text style={styles.label}>WLAN-Name (SSID):</Text>
          <TextInput
            style={styles.input}
            value={ssid}
            onChangeText={setSsid}
            placeholder="Gib den WLAN-Namen ein"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Passwort:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Gib das WLAN-Passwort ein"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Sicherheitstyp:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={securityType}
              onValueChange={(itemValue) => setSecurityType(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="WPA3" value="WPA3" />
              <Picker.Item label="WPA/WPA2" value="WPA" />
              <Picker.Item label="WEP" value="WEP" />
              <Picker.Item label="None" value="nopass" />
            </Picker>
          </View>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Ist Versteckt:</Text>
          <Switch
          trackColor={{false: 'rgb(35, 210, 134)', true: 'rgb(205, 23, 23)'}}
          onValueChange={setIsHidden}
          value={isHidden}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
          title='QR-Code generieren'
          onPress={generateQRCode}
          color="rgb(199, 146, 234)"
          />
        </View>

        {qrValue ? (
          <View style={styles.qrContainer}>
            <QRCode
            value={qrValue}
            size={200}
            backgroundColor="white"
            color="black"
            />
            <Text style={styles.qrText}>Scanne diesen QR-Code um dich mit dem WLan zu verbinden</Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
    </View>
  );
}