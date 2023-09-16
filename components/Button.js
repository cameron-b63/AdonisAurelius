import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme }) {
    if (theme === "primary") {
        return(
            <View
                style={[styles.buttonContainer]}
            >
                <Pressable
                    style={[styles.button, { backgroundColor: "#81937B" }]}
                    onPress={() => alert('You pressed a button.')}
                >
                    <FontAwesome
                        name="book"
                        size={18}
                        color="#FFFFF0"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, { color: "#FFFFF0" }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return(
        <View style={StyleSheet.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 6,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#FFFFF0',
        fontSize: 16,
    },
})