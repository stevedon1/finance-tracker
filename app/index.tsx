import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Header from '@/components/Header';

const index = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
         <Header/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // Extra padding if needed
    paddingHorizontal: 0,
  },
});

export default index;
