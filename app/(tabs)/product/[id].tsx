import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductSetting() {
    const {id} = useLocalSearchParams()
    
    return (
        <View>
            <Text style={styles.text}>Detail of user {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: '22px'
    }
})