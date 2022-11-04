import { View, StyleSheet, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Todo = ({ todo, delTodo }) => {
  const delHandler = () => delTodo(todo.id);
  return (
    <View>
      <Pressable
        onPress={delHandler}
        style={({ pressed }) => pressed && { opacity: 0.7 }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>{todo.content}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Todo;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF2FF",
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    // borderRadius: 10,
  },
  text: {
    color: "#703ACF",
    fontWeight: "bold",
  },
});
