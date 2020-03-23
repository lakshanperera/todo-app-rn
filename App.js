import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ToastAndroid,
} from 'react-native';

// custom component
import List from './component/List';
import Form from './component/Form';

export default function App() {
  const [todos, setTodos] = useState([
    {key: '1', title: 'Get Up'},
    {key: '2', title: 'Wash'},
    {key: '3', title: 'Exercise'},
    {key: '4', title: 'Eat'},
    {key: '5', title: 'Wash again'},
  ]);

  const addNewTodo = newTitle => {
    if (newTitle.length > 3) {
      const newTodo = {key: Date.now().toString(), title: newTitle};
      setTodos(prevTodos => [newTodo, ...prevTodos]);
      ToastAndroid.show('New Todo has been added...', 1000);
    } else {
      Alert.alert(
        'Error adding new Todo',
        'Todo title has to be at least 3 characters long.',
        [{text: 'Understood', style: 'cancel'}],
        {cancelable: true},
      );
    }
  };

  const removeTodo = key => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.key != key));
  };

  const content =
    todos.length > 0 ? (
      <List
        todos={todos}
        addNewTodosHandler={addNewTodo}
        removeTodo={removeTodo}
      />
    ) : (
      <Text style={styles.listEmptyHeader}>No Todos</Text>
    );
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Todo App</Text>
        </View>
        <Form addTodo={addNewTodo} />
        {content}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  listEmptyHeader: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
