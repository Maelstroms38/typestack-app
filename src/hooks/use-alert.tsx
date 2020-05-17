import React, { useState, useEffect } from 'react';
import { Snackbar, useTheme } from 'react-native-paper';

export default ({ message }) => {
  const [alert, setAlert] = useState(null);
  const theme = useTheme();

  const _onDismissSnackBar = () => setAlert(null);

  useEffect(() => {
    if (message && message.length) {
      setMessage(message);
    }
  }, []);

  const setMessage = (newMessage: string) => {
    setAlert(
      <Snackbar
        style={{ backgroundColor: theme.colors.background }}
        visible={true}
        onDismiss={() => _onDismissSnackBar()}
        action={{
          label: 'OK',
          onPress: () => {
            _onDismissSnackBar();
          },
        }}
      >
        {newMessage || message}
      </Snackbar>
    );
  };
  return { setMessage, alert };
};
