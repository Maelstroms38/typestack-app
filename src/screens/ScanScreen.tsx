import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useTheme, Button, Card, Dialog, Paragraph } from 'react-native-paper';
import fetchBook from '../../api';

interface Scan {
  type: string;
  data: string;
}

export default function ScanScreen(props) {
  const { navigation } = props;
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [scanned, setScanned] = useState('');
  const [book, setBook] = useState(null);

  const _showDialog = () => setVisible(true);
  const _hideDialog = () => {
    setVisible(false);
    setScanned('');
  };

  const handleBarCodeScanned = async (scan: Scan) => {
    setScanned(scan.data);
    const book = await fetchBook(scan.data);
    if (book) {
      setBook(book);
      _showDialog();
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? (undefined as any) : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Dialog
        style={{ backgroundColor: theme.colors.background }}
        visible={visible}
        onDismiss={_hideDialog}
      >
        <Dialog.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>
          {book && book.volumeInfo && book.volumeInfo.title}
        </Dialog.Title>
        <Dialog.Content>
          <Card.Cover
            source={{
              uri: `https://pictures.abebooks.com/isbn/${scanned}-us-300.jpg`
            }}
          />
        </Dialog.Content>
        <Dialog.Actions style={{ justifyContent: 'space-between' }}>
          <Button mode="text" style={{ flex: 1 }} onPress={_hideDialog}>
            CANCEL
          </Button>
          <Button
            mode="outlined"
            style={{ flex: 2 }}
            onPress={() => {
              navigation.navigate('ScanForm', { item: book });
            }}
          >
            ADD BOOK
          </Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}
