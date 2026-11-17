import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.card}>
        <Text style={styles.tagline}>YOUR THYROID HEALTH, CONNECTED AND SIMPLIFIED</Text>
        <Text style={styles.title}>Care Your Thyroid</Text>
        <Text style={styles.subtitle}>
          Mobile application shell initialized for Phase 1.
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>API Core v1.0.0 Connected</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FAFA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E4EEEE',
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#123D42',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  tagline: {
    fontSize: 10,
    fontWeight: '700',
    color: '#167D83',
    letterSpacing: 1.2,
    marginBottom: 8,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#123D42',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#718487',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  badge: {
    backgroundColor: '#E6F4F4',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#167D83',
  },
});
