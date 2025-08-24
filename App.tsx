import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.wrapper}>
      {/* Full-screen background image */}
      <Image 
        source={require('./assets/plans.png')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      <View style={styles.container}>
        <Text style={styles.title}>🚀 kExpoScaffold</Text>
        <Text style={styles.version}>Pre-scaffolded Expo Project</Text>
        <Text style={styles.subtitle}>Ready-to-use foundation for cross-platform apps</Text>
        <Text style={styles.platform}>Platform: {Platform.OS}</Text>
        
        <Text style={styles.techStackTitle}>Tech Stack:</Text>
        
        <View style={styles.techStackContainer}>
          <View style={styles.techItem}>
            <Image 
              source={require('./assets/logo-react-native.png')} 
              style={styles.techIcon}
              resizeMode="contain"
            />
            <Text style={styles.techText}>React Native v0.79.5</Text>
          </View>
          
          <View style={styles.techItem}>
            <Image 
              source={require('./assets/logo-expo.png')} 
              style={styles.techIcon}
              resizeMode="contain"
            />
            <Text style={styles.techText}>Expo v53.0.22</Text>
          </View>
          
          <View style={styles.techItem}>
            <Image 
              source={require('./assets/logo-react-native.png')} 
              style={styles.techIcon}
              resizeMode="contain"
            />
            <Text style={styles.techText}>React v19.0.0</Text>
          </View>
          
          <View style={styles.techItem}>
            <Image 
              source={require('./assets/logo-typescript.png')} 
              style={styles.techIcon}
              resizeMode="contain"
            />
            <Text style={styles.techText}>TypeScript v5.8.3</Text>
          </View>
          
          <View style={styles.techItem}>
            <Image 
              source={require('./assets/logo-html.png')} 
              style={styles.techIcon}
              resizeMode="contain"
            />
            <Text style={styles.techText}>React Native Web v0.20.0</Text>
          </View>
        </View>
        
        <Text style={styles.instructionsTitle}>Ready for development</Text>
        
        <View style={styles.platformContainer}>
          <View style={styles.platformItem}>
            <Image 
              source={require('./assets/logo-android.png')} 
              style={styles.platformIcon}
              resizeMode="contain"
            />
            <Text style={styles.platformText}>Android (via Expo Go)</Text>
          </View>
          
          <View style={styles.platformItem}>
            <Image 
              source={require('./assets/logo-html.png')} 
              style={styles.platformIcon}
              resizeMode="contain"
            />
            <Text style={styles.platformText}>Web (localhost:19006)</Text>
          </View>
          
          <View style={styles.platformItem}>
            <Image 
              source={require('./assets/logo-apple.png')} 
              style={styles.platformIcon}
              resizeMode="contain"
            />
            <Text style={styles.platformText}>iOS (macOS only)</Text>
          </View>
        </View>
        
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  version: {
    fontSize: 14,
    color: '#FFD700',
    marginBottom: 15,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  platform: {
    fontSize: 16,
    color: '#222',
    marginBottom: 15,
    fontWeight: '600',
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  techStackTitle: {
    fontSize: 16,
    color: '#222',
    marginBottom: 10,
    fontWeight: '600',
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  techStackContainer: {
    marginBottom: 20,
    alignItems: 'flex-start',
    width: 'auto',
  },
  techItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  techIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  techText: {
    fontSize: 12,
    color: '#222',
    fontWeight: '500',
    textShadowColor: '#fff',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  instructionsTitle: {
    fontSize: 14,
    color: '#222',
    marginBottom: 10,
    fontWeight: '600',
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  platformContainer: {
    alignItems: 'flex-start',
    width: 'auto',
  },
  platformItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  platformIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  platformText: {
    fontSize: 12,
    color: '#222',
    fontWeight: '500',
    textShadowColor: '#fff',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
});

