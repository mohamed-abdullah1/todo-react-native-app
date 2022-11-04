import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import { useState } from "react";
import Todo from "./src/components/Todo";
import AddTodo from "./src/components/AddTodo";
const todoTemp = [
  { id: 1, content: "Finish Neural Network Assignment 🏛" },
  {
    id: 2,
    content: "Complete the Distributed Systems Section 😇",
  },
];

const App = () => {
  const [todoList, setTodoList] = useState(todoTemp);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const delTodo = (todoId) =>
    setTodoList((prev) => prev.filter((todo) => todo.id !== todoId));
  const addTodo = (content) => {
    setTodoList((prev) => [...prev, { id: Math.random().toString(), content }]);
  };
  const pressAddTodoHandler = () => setShowAddTodo(true);

  return (
    <View style={styles.appContainer}>
      <View style={styles.main}>
        <AddTodo
          addTodo={addTodo}
          showAddTodo={showAddTodo}
          setShowAddTodo={setShowAddTodo}
        />
        <View style={styles.brnContainer}>
          <Button
            color="#9271C2"
            title="Add Todo"
            onPress={pressAddTodoHandler}
          />
        </View>
        <View style={styles.todoListContainer}>
          <FlatList
            data={todoList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Todo todo={item} delTodo={delTodo} />}
          />
        </View>
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#2D1674",
    flex: 1,
  },
  main: {
    margin: 40,
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
  },
  brnContainer: {
    width: "40%",
    flex: 2,
    justifyContent: "center",
    // alignItems: "center",
  },
  todoListContainer: {
    width: "100%",
    flex: 8,
  },
});
