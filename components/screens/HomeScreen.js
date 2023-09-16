import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

//TODO: Replace with Aurelius image
const PlaceholderImage = require('../../assets/images/ai_meditations_cover_art_1.png');

import ImageViewer from '../ImageViewer';
import Button from '../Button';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageViewer placeholderImageSource={PlaceholderImage} />
          </View>
          <View style={styles.footerContainer}>
            <Button theme="primary" label="Read full text" />
          </View>
          <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#718074',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      flex: 1,
      paddingTop: 58,
    },
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
    headerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
    standardText: {
      color: '#FFFFF0',
    },
    footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
  });