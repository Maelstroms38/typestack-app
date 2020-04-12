import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, Text, Title } from 'react-native-paper';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { RoundedButton } from '../components';

export default function Schedule(props) {
  const { navigation } = props;

  const [hasPermission, setHasPermission] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    (async () => {
      const { granted } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(granted);
    })();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <Title
        style={{
          textAlign: 'center',
          color: '#fff',
          lineHeight: 38,
          fontWeight: 'bold',
        }}
      >
        Scan Books
      </Title>
      {hasPermission === null ? (
        <View>
          <Ionicons
            name="md-arrow-dropdown"
            size={32}
            color="#fff"
            style={{ alignSelf: 'center' }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: '#fff',
              lineHeight: 38,
            }}
          >
            Requesting for camera permission
          </Text>
          <RoundedButton
            icon={
              <Ionicons
                name="md-camera"
                size={32}
                color={theme.colors.primary}
                style={{ alignSelf: 'center' }}
              />
            }
            text="Allow Camera Access"
            backgroundColor="#fff"
            textColor={theme.colors.primary}
            onPress={async () => {
              const {
                granted,
              } = await BarCodeScanner.requestPermissionsAsync();
              setHasPermission(granted);
            }}
          />
        </View>
      ) : hasPermission === false ? (
        <View>
          <Ionicons
            name="md-arrow-dropdown"
            size={32}
            color="#fff"
            style={{ alignSelf: 'center' }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: '#fff',
              lineHeight: 38,
            }}
          >
            No access to camera
          </Text>
          <RoundedButton
            icon={
              <Ionicons
                name="md-camera"
                size={22}
                color={theme.colors.primary}
                style={{ left: 20 }}
              />
            }
            text="Allow Camera Access"
            backgroundColor="#fff"
            textColor={theme.colors.primary}
            onPress={async () => {
              const {
                granted,
              } = await BarCodeScanner.requestPermissionsAsync();
              setHasPermission(granted);
            }}
          />
        </View>
      ) : (
        <RoundedButton
          icon={
            <MaterialCommunityIcons
              name="barcode-scan"
              size={22}
              color={theme.colors.primary}
              style={{ left: 20 }}
            />
          }
          text="Start"
          backgroundColor="#fff"
          textColor={theme.colors.primary}
          onPress={async () => {
            navigation.navigate('ScanScreen');
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
