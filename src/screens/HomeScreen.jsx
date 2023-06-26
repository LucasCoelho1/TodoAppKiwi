import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from " ../utils/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View>
          <View>
            <Text style={{ color: "#fff", textAlign: "center", fontFamily: "Franklin Gothic Medium", fontSize: 20, marginBottom: "5px"}}>
              Seja bem vindo!
            </Text>
            <Button
              mode="contained"
              style={{
                backgroundColor: "#ff4655",
                color: "#fff",
              }}
              onPress={() => {
                navigation.navigate("AddTaskScreen");
              }}
            >
              Adicione uma tarefa
            </Button>
            <View ></View>
            <Button
              mode="contained"
              style={{
                backgroundColor: "#ff4655",
                color: "#fff",
              }}
              onPress={() => {
                navigation.navigate("EditTaskScreen");
              }}
            >
              Edite a sua tarefa
            </Button>
          </View>
        </View>
    </View>
  );
}
