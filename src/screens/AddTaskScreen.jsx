import { useState } from "react";
import { View } from "react-native";
import { Button, Divider, Text, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";


export default function AddTaskScreen() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')

    async function addTaskToFirestore() {
        try {
            const taskRef = collection(db, 'tarefas');
            const payload = await addDoc(taskRef, {
                titulo: titulo,
                descricao: descricao
            })
            console.log(payload)


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View
            style={styles.container}
        >
            <Text
                variant="headlineLarge"
                style={{fontSize: 20, marginBottom: 7}}
            >🥝 Adicionar Tarefa 🥝</Text>
            <Divider />
            <TextInput
                label="Título"
                value={titulo}
                onChangeText={setTitulo}
                style={{ backgroundColor:"#9CF5B6", color:"black", margin: 5}}
            />
            <Divider style={styles.divider} />
            <TextInput
                label="Descrição"
                value={descricao}
                onChangeText={setDescricao}
                style={{ backgroundColor:"#9CF5B6", color:"black", margin: 5}}
            />
            <Divider style={styles.divider} />
            <Button
                mode="contained"
                onPress={addTaskToFirestore}
                icon={"plus"}
                textColor="black"
                style={{ backgroundColor:"#9CF5B6"}}
            >Adicionar Tarefa</Button>
        </View>
    )
}