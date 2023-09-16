import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ coverImageSource }) {
    return (
        <Image source={coverImageSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: '#C5AAA8'
    },
});