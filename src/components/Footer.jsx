import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>This is a cool Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#f0f0f0',
  },
});

export default Footer;
