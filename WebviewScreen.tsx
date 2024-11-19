import React from 'react';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const WebviewScreen: React.FC = () => {
  return <WebView source={{ uri: 'file:///android_asset/home.html' }} style={styles.webview} />;
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default WebviewScreen;
