import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import TodoItem from './TodoItem';

const List = ({todos, removeTodo}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <TodoItem title={item.title} id={item.key} removeTodo={removeTodo} />
        )}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#fff',
    flex: 1,
    marginBottom: 5,
  },
});
