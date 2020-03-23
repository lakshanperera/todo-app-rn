import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';

const Form = ({addTodo}) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        placeholder="New Todo Item"
        onChangeText={txt => setText(txt)}
      />
      <Button title="Add" onPress={() => addTodo(text)} color="darkorange" />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#000',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginBottom: 5,
    borderRadius: 10,
  },
  container: {
    margin: 10,
  },
});
