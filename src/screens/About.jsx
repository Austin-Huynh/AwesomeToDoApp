import React from 'react';
import {View, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About({}) {
  return (
    <>
      <MainLayout>
        <View>
          <Text>Austin's Awesome To Do List App</Text>
          <Text>Created by: Austin Huynh</Text>
          <Text>Version: 1.0.0</Text>
        </View>
      </MainLayout>
    </>
  );
}

export default About;
