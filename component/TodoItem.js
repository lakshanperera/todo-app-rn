import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const TodoItem = ({title, id, removeTodo}) => {
  return (
    <TouchableOpacity
      style={styles.styleContainer}
      onPress={() => removeTodo(id)}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5,
    padding: 10,
    // color: '#fff',
  },
  styleContainer: {
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 10,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
