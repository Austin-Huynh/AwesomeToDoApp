import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';
import BreakingBadQuote from '../components/BreakingBadQuote';

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
      <MainLayout>
        <SafeAreaView>
          <ToDoList tasks={tasks} />
          <ToDoForm onAddTask={handleAddTask} />
          <BreakingBadQuote />
        </SafeAreaView>

        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </MainLayout>
    </>
  );
}

export default Home;
