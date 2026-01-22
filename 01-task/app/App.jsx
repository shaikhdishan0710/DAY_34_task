import React from 'react';
import { SafeAreaView } from 'react-native';
import PatientList from './screens/PatientList';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PatientList />
    </SafeAreaView>
  );
};

export default App;
