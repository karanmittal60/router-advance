import React from 'react';
import './App.css';
import BasicRoutes from "./RoutesTutorials/BasicRoutes";
import DataLoading from './RoutesTutorials/DataLoading';

function App() {
  return (
    <div className="App">
      <BasicRoutes />

      <DataLoading />
    </div>
  );
}

export default App;
