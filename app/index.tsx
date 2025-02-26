import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const index = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>
        <Text>Finance tracking app</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // Extra padding if needed
    paddingHorizontal: 16,
  },
});

export default index;
