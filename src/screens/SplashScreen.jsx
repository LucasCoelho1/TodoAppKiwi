import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("TabsNavigation");
  }, 1000);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ff4655" />
      <Text>Aguarde um instante...</Text>
    </View>
  );
}
