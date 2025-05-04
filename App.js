import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  Switch,
  ImageBackground,
} from 'react-native';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [securityType, setSecurityType] = useState('WPA');
  const [isHidden, setIsHidden] = useState(false);
  const [qrValue, setQrValue] = useState('');
  const [wifiDataList, setWifiDataList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const generateQRCode = async () => {
    const wifiString = `WIFI:S:${ssid};T:${securityType};P:${password};H:${isHidden};;`;
    setQrValue(wifiString);
  
    try {
      const storedData = await AsyncStorage.getItem('wifiDataList');
      let wifiDataList = storedData ? JSON.parse(storedData) : [];
  
      const wifiData = { ssid, password, securityType, isHidden };
  
      if (selectedIndex !== null && wifiDataList[selectedIndex]) {
        // überschreiben
        wifiDataList[selectedIndex] = wifiData;
      } else {
        // neuer Eintrag
        wifiDataList.push(wifiData);
      }
  
      await AsyncStorage.setItem('wifiDataList', JSON.stringify(wifiDataList));
      setWifiDataList(wifiDataList);
    } catch (e) {
      console.error('Speichern fehlgeschlagen', e);
    }
  };
  
  const loadWifiData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('wifiDataList');
      if (storedData != null) {
        const wifiDataList = JSON.parse(storedData);
        setWifiDataList(wifiDataList);  // Setze alle geladenen Daten
      }
    } catch (e) {
      console.log('Fehler beim Laden', e);
    }
  };

  const deleteAllWifiData = async () => {
    try {
      await AsyncStorage.removeItem('wifiDataList');
      setWifiDataList([]);
    } catch (e) {
      console.error('Fehler beim Löschen aller Einträge', e);
    }
  };

  const deleteWifiDataAtIndex = async (index) => {
    try {
      const updatedList = [...wifiDataList];
      updatedList.splice(index, 1);
      await AsyncStorage.setItem('wifiDataList', JSON.stringify(updatedList));
      setWifiDataList(updatedList);
    } catch (e) {
      console.error('Fehler beim Löschen des Eintrags', e);
    }
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpeg')} // Pfad zu deinem Bild anpassen
      style={styles.backgroundContainer}
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
              trackColor={{
                false: 'rgb(205, 23, 23)',
                true: 'rgb(35, 210, 134)',
              }}
              ios_backgroundColor="rgb(205, 23, 23)"
              onValueChange={setIsHidden}
              value={isHidden}
            />
          </View>

          <View style={[styles.buttonContainer, {flexDirection: 'row', justifyContent: 'space-between'}]}>
          <View style={{ flex: 1, marginRight: 5 }}>
              <Button
                title="QR-Code generieren"
                onPress={generateQRCode}
                color="rgb(199, 146, 234)"
              />
            </View>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <Button
                title='Gespeicherte Daten laden'
                onPress={loadWifiData}
                color="rgb(199, 146, 234)"
              />
            </View>
          </View>

          {qrValue ? (
            <View style={styles.qrContainer}>
              <QRCode
                value={qrValue}
                size={200}
                backgroundColor="white"
                color="black"
              />
              <Text style={styles.qrText}>
                Scanne diesen QR-Code um dich mit dem WLan zu verbinden
              </Text>
            </View>
          ) : null}

          {wifiDataList.length > 0 && (
            <View style={{ marginVertical: 10 }}>
              <Button title="Alle Einträge löschen" onPress={deleteAllWifiData} color="rgb(199, 146, 234)" />
            </View>
          )}

<View style={styles.dataContainer}>
  {wifiDataList.map((data, index) => (
    <View key={index} style={styles.dataItem}>
      <Text style={styles.dataText}>WLAN-Name: {data.ssid}</Text>
      <Text style={styles.dataText}>Passwort: {data.password}</Text>
      <Text style={styles.dataText}>Sicherheitstyp: {data.securityType}</Text>
      <Text style={styles.dataText}>
        Ist Versteckt: {data.isHidden ? 'Ja' : 'Nein'}
      </Text>
      <Button title="Löschen" onPress={() => deleteWifiDataAtIndex(index)} color="rgb(205, 23, 23)" />
    </View>
  ))}
</View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
