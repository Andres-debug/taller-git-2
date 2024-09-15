import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <Text>Este emnsaje viene de una rama feature</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        doloribus dolore molestiae numquam suscipit itaque totam obcaecati
        atque, facilis saepe ut similique inventore ea aperiam voluptates
        repellendus accusantium aspernatur? Dolore!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
