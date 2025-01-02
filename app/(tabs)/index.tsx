import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { Button, Image, Platform, StyleSheet, TextInput } from 'react-native';

// Define the type for the SIM details
interface SimDetails {
  operator: string;
  balance: string;
  validity: string;
}

export default function App() {
  const [simNumber, setSimNumber] = useState<string>('');  // SIM number as a string
  const [simDetails, setSimDetails] = useState<SimDetails | null>(null);  // Initial state is null, or it can hold SimDetails
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for the search bar

  const fetchSimDetails = () => {
    // This function would ideally fetch details from an API
    // Here we are using dummy data for demonstration
    if (simNumber === '1234567890') {
      setSimDetails({
        operator: 'Telenor',
        balance: '150 PKR',
        validity: '30 Days',
      });
    } else {
      setSimDetails(null); // Clear the details if the SIM number doesn't match
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
        // source={require('@/assets/images/partial-react-logo.png')}
        // style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>



      {/* SIM Number Input Section */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Enter SIM Number:</ThemedText>
        <TextInput
          style={[styles.input, { color: 'white' }]} // Added inline style for white text
          placeholder="Enter your SIM number"
          placeholderTextColor="#cccccc" // Placeholder color for better contrast
          keyboardType="phone-pad"
          value={simNumber}
          onChangeText={setSimNumber}
        />

        <Button title="Fetch Details" onPress={fetchSimDetails} />
      </ThemedView>

      {/* Displaying SIM Details */}
      {simDetails && (
        <ThemedView style={styles.detailsContainer}>
          <ThemedText type="subtitle">SIM Details:</ThemedText>
          <ThemedText>Operator: {simDetails.operator}</ThemedText>
          <ThemedText>Balance: {simDetails.balance}</ThemedText>
          <ThemedText>Validity: {simDetails.validity}</ThemedText>
        </ThemedView>
      )}

      {/* Instructions or Steps */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>

      {/* Other steps */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginVertical: 12,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginVertical: 12,
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginVertical: 16,
  },
});
