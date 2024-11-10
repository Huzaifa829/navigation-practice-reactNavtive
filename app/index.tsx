import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link style={styles.aboutBtn} href={'/Details'}>about</Link>
    </View>
  );
}
const styles = StyleSheet.create({
  aboutBtn : {
    backgroundColor:'red',
    color:'white',
    padding:5,
    fontWeight:500,
    fontSize:20
  }
})