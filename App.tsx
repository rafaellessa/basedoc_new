import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Stack from './src/navigation/Stack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
