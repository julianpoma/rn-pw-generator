import { Alert, Button } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const CopyToClipboardButton = () => {
  return (
    <Button
      color={colors.primary}
      title="Copy to clipboard"
      onPress={() => Alert.alert('Copied!')}
    />
  );
};

export default CopyToClipboardButton;
