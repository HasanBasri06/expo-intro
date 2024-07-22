import { StyleSheet, Text, View } from "react-native";

export default function settings() {
    return (
        <View>
            <Text style={styles.text}>Helooooo</Text>
            <Text style={styles.text}>Hesabım Detay Sayfası</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'yellow',
        fontSize: "22px",
        fontWeight: "800"
    }
})