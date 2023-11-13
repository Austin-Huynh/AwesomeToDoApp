import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import ToDoList from '../ToDoList';
import ToDoForm from '../ToDoForm';

function Home({navigation}) {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Study',
  ]);

  const handleAddTask = task => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm onAddTask={handleAddTask} />
      </SafeAreaView>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </>
  );
}

export default Home;
