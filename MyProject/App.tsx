import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/Login';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
};

export default App;
