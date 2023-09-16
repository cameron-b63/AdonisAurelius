import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

//TODO: #1 Replace with random dynamic image from mongo
const coverImage = require('../../assets/images/ai_meditations_cover_art_1.png');

import ImageViewer from '../ImageViewer';
import Button from '../Button';

//TODO: #2 Replace with dynamic quote, generated from a getDailyQuote function. Find the best way to not have to use system time.
//TODO: #3 Ellipses to view full quote in new screen.
dailyQuote = "\"The things you think about determine the quality of your mind. Your soul takes on the color of your thoughts.\" - Book V, Passage 16";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageViewer coverImageSource={coverImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.quoteText}>{dailyQuote}</Text>
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
      padding: 20,
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
    textContainer: {
        flex: 1/3,
        borderRadius: 18,
        padding: 20,
        justifyContent: 'center',
    },
    quoteText: {
      color: '#FFFFF0',
      fontSize: 20,
      textAlign: 'center',
      fontStyle: 'italic',
    },
    footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
  });