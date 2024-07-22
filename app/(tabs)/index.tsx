import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.link}>Hasan Basri Mobile Uygulaması</Text>
      <Link href="/myaccount" style={styles.link}>Hesabım</Link>
      <Link href="/product/5" style={styles.link}>Ürün Detay</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    color: 'red',
  },

  link: {
    color: 'white',
  }
});
