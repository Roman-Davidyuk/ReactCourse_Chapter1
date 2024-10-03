import React from 'react';
import Header from './components/Header';
import ToDoListContainer from './components/ToDoListContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ToDoListContainer />
    </div>
  );
};

export default App;
