import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#007bff" />
      
      <View style={styles.container}>
        {/* Top section: App Name & Add Button */}
        <View style={styles.topSection}>
          <Text style={styles.appName}>CoinoMe</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add</Text>
          </TouchableOpacity>
        </View>

        {/* Date Section */}
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Date Today</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#007bff', // Covers the whole top, including status bar
  },
  container: {
    width: '100%',
    height: 100, // Adjust height as needed
    backgroundColor: '#007bff', // Header background color
    justifyContent: 'center',
  },
  topSection: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 4, 
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dateContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Header;
