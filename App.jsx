/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ToDoForm from './src/ToDoForm';
import ToDoList from './src/ToDoList';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Study',
  ]);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
