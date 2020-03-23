/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Form from '../component/Form';
import List from '../component/List';
import TodoItem from '../component/TodoItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('TodoItem renders correctly', () => {
  renderer.create(
    <TodoItem
      title="Title"
      id="1"
      removeTodo={() => console.log('Removes Todo')}
    />,
  );
});

it('List renders correctly', () => {
  renderer.create(
    <List
      todo={{title: 'title', key: '1'}}
      removeTodo={() => console.log('Removes Todo')}
    />,
  );
});

it('Form renders correctly', () => {
  renderer.create(<Form addTodo={() => console.log('Removes Todo')} />);
});

it('App renders correctly', () => {
  renderer.create(<App />);
});
