import { View, StyleSheet, TextInput, Modal, Button } from "react-native";
import { useState } from "react";
const AddTodo = ({ showAddTodo, addTodo, setShowAddTodo }) => {
  const [content, setContent] = useState("");
  const cancelHandler = () => setShowAddTodo(false);
  const addHandler = () => {
    addTodo(content);
    setContent("");
    setShowAddTodo(false);
  };
  return (
    <Modal visible={showAddTodo} animationType="slide">
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput value={content} onChangeText={setContent} />
        </View>
        <View style={styles.btnContainers}>
          <Button title="Add Todo" color="#2D1674" onPress={addHandler} />
          <Button title="Cancel" color="#2D1674" onPress={cancelHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default AddTodo;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF2FF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#2D1674",
    width: "80%",
    // borderRadius: 32,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  btnContainers: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 30,
  },
});
